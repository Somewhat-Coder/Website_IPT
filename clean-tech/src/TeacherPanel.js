import { Col , Row , Container,Form, Button, Modal } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import axios from "axios"
import './Navigation.css';
import { useEffect, useState } from 'react';





const TeacherPanel = () => {


    const [registrations, setRegis] = useState([]);
 

    useEffect( async () =>{
        
        try {
            await axios.get("https://localhost:44323/api/GetRegistrationsTeacher",)
            .then((responce) => {
  
                setRegis(responce.data)
        })
        } 
        catch (error) {
            console.error(error)
        }
    },[])



    return(
        <Container style={{marginTop:'50px', maxWidth:'1000px',paddingLeft:'3vw',paddingRight:'3vw'}}>

            <Row>
                <h1>Registrations</h1>
            </Row>

            <Row style={{paddingTop:'30px'}}>

            <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Mode</th>
                            <th>Subjects</th>
                            <th>Hours</th>
                            <th>Offering Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                        { registrations.map((student) =>(
                             <tr>
                             <td>{student[0]}</td>
                             <td>{student[1]}</td>
                             <td>{student[2]}</td>
                             <td>{student[3]}</td>
                             <td>{student[4]}</td>
                             <td>{student[5]}</td>
                             <td>{student[6]}</td>
                             <td>{student[7]}</td>
                   
                             </tr>

                        ))
                        }
                        </tbody>

                </Table>

            </Row>
    
      </Container>            
);


}

export default TeacherPanel;