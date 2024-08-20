import { ChangeEvent,useEffect,useState } from "react"
import{appsettings} from "../settings/appsettings"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { IDepartment } from "../Interfaces/IDepartment"
import{Container,Row,Col,Form,FormGroup,Label,Input,Button} from "reactstrap"

const initialDepartment = {
    idDepartment:0,
    description:""
}

export function EditDepartment()
{
    const{id} = useParams<{id:string}>()
    const[department,setDepartment] = useState<IDepartment>(initialDepartment)
    const navigate = useNavigate()

    
        useEffect(()=>{
            const getDepartment = async() => {
                const response = await fetch(`${appsettings.apiUrl}Department/GetDepartment/${id}`)
                if(response.ok){
                    const data = await response.json();
                    setDepartment(data);
                }
            }
        getDepartment()
    },[])

    const inputChangeValue = (event: ChangeEvent<HTMLInputElement>)=> {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setDepartment({...department,[inputName]:inputValue})
    }

    const saveme = async ()=> 
    {
            const response = await fetch(`${appsettings.apiUrl}Department/EditDepartment`,{
            method: 'PUT',
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
                    text: "Department could not be modified",
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
             <h4>Edit Department</h4>
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