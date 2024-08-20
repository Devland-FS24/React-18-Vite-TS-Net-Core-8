import { useEffect, useState} from "react"
import { appsettings } from "../settings/appsettings"
import { IDepartment } from "../Interfaces/IDepartment"
import{Container,Row,Col,Table, Button} from "reactstrap"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export function ListDepartment(){
    const [departments, setDepartments] = useState<IDepartment[]>([]);

    const getDepartments = async()=>{
        const response = await fetch(`${appsettings.apiUrl}Department/ListDeparments`)
        if(response.ok)
        {
            const data = await response.json();
            setDepartments(data)
        }
    }

    useEffect(()=> {
        getDepartments()
    }, [])

    const Delete=(id:number)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await fetch(`${appsettings.apiUrl}Department/DeleteDepartment/${id}`,{method:"DELETE"})
                if(response.ok) await getDepartments()
            }
          });
    }


    return(
        <Container className="mt-5">
            <Row>
                <Col sm={{size:8, offset:2}}>
                <h4>List of Departments</h4>
                <hr/>
                <Link className="btn btn-success mb-3" to="newdepartment">New Department</Link> 
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map((item)=>(
                                <tr key={item.idDeparment}>
                                    <td>{item.description}</td>
                                    <td>
                                    <Link className="btn btn-primary me-2" to={`/editdepartment/${item.idDeparment}`}>Edit</Link> 
                                    <Button color="danger" onClick={()=> {Delete(item.idDeparment!)}}>
                                        Delete
                                    </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}