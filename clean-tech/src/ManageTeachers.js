import { Col , Row , Container,Form, Button, Modal } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import axios from "axios"
import './Navigation.css';
import { useEffect, useState } from 'react';





const ManageTeachers = () => {

    const [teachers, setTeachers] = useState([]);
    const [selected, setSelected] = useState([]);

    const [submitResponce, setSubmitResponce] = useState('')
    const [submitStatus, setSubmitStatus] = useState('')
    const [show, setShow] = useState(false);
    const [removed, setRemoved] = useState(false);

    useEffect( async () =>{
        
        try {
            await axios.get("https://localhost:44323/api/GetTeachers",)
            .then((responce) => {
  
                setTeachers(responce.data)
        })
        } 
        catch (error) {
            console.error(error)
        }
    },[])



    const handleCheck = (id) => {

        let newSubjects = selected
        let ind = newSubjects.indexOf(id)

        if(ind === -1){
            newSubjects.push(id)
        }
        else{
            newSubjects.splice(ind, 1); 
        }

        setSelected(newSubjects)
    }



    const handleRemove = async() => {

        if (selected.length == 0){

            setSubmitStatus("Failed")
            setSubmitResponce("Select atleast one teacher to remove.")
            setRemoved(false)

        }
        else{
            try {
                await axios.post("https://localhost:44323/api/RemoveTeacher", 
                    {
                        ids : selected
                    }
                )
                .then((responce) => {
                if (responce.data === "Success"){

                    setSubmitResponce("teacher(s) removed successfully")
                    setSubmitStatus("Success")
                    setRemoved(true)

                }
                else{
                    setRemoved(false)
                    setSubmitResponce("An error occured")
                    setSubmitStatus("Failed")
                }
            })
            } 
            
            catch (error) {
                console.error(error)
            }
    

        }
    
        setShow(true)
    }


    const handleModal = () => {

        if (removed){
            window.location.reload()
        }
        setShow(false)
    }



    return(
        <Container style={{marginTop:'50px', maxWidth:'1000px',paddingLeft:'3vw',paddingRight:'3vw'}}>

            <Row>
                <h1>Manage Teachers</h1>
            </Row>
            <Row md={6} style={{justifyContent:'right'}}>
            <Button size='sm' variant="danger" md={2} onClick={handleRemove}>Remove</Button>{' '}
            </Row>

            <Row style={{paddingTop:'30px'}}>

            <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Subject</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        { teachers.map((teacher) =>(
                             <tr>
                             <td>{teacher[0]}</td>
                             <td>{teacher[1]}</td>
                             <td>{teacher[2]}</td>
                             <td>{teacher[3]}</td>
                             <td>{teacher[4]}</td>
                             <td>
                                <Form.Check type='checkbox' id={'default-checkbox'} key={teacher[0]} style={{backgroundColor:'red',paddingLeft:'40px'}} onChange={() => {handleCheck(teacher[0])}} />
                             </td>
                   
                             </tr>

                        ))
                        }
                        </tbody>

                </Table>

            </Row>

            <Modal show={show} onHide={handleModal} animation={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{submitStatus}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitResponce}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleModal}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>

       
      
      </Container>
    );

}


export default ManageTeachers;