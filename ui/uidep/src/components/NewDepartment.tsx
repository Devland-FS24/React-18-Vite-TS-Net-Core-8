import { ChangeEvent,useState } from "react"
import{appsettings} from "../settings/appsettings"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { IDepartment } from "../Interfaces/IDepartment"
import{Container,Row,Col,Form,FormGroup,Label,Input,Button} from "reactstrap"

const initialDepartment = {
    description:""
}

export function NewDepartment(){

    const[department, setDepartment] = useState<IDepartment>(initialDepartment);
    const navigate = useNavigate();

    const inputChangeValue = (event: ChangeEvent<HTMLInputElement>)=>{
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setDepartment({...department,[inputName]: inputValue})
    }

    const saveme = async ()=> 
    {
        const response = await fetch(`${appsettings.apiUrl}Department/NewDepartment`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(department)
        })  
        if(response.ok){
            navigate("/")
        } else {
            Swal.fire({
                title: "Error!",
                text: "Department could not be saved",
                icon: "warning"
            });
        }
    }

    const backto = ()=> {
        navigate("/")
    }

    return(
        <Container className="mt-5">
            <Row>
                <Col sm={{size:8,offset:2}}>
                 <h4>New Department</h4>
                 <hr/>
                 <Form>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="text" name="description" onChange={inputChangeValue} value={department.description}/>
                    </FormGroup>
                 </Form>
                 <Button color="primary" className="me-4" onClick={saveme}>Save Changes</Button>
                 <Button color="secondary" onClick={backto}>Back</Button>
                </Col>
            </Row>
        </Container>
    )
}