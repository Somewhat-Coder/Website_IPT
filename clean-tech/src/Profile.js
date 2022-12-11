import { useState , useEffect} from 'react';
import { Modal , Button, Form} from 'react-bootstrap';
import axios from "axios";
import {Container , Row, Col,FloatingLabel,Dropdown, DropdownButton} from 'react-bootstrap';
import './Profile.css';
import { useNavigate } from "react-router-dom";




const Profile = () => {

const [name,setName] = useState("Someone")
const [role,setRole] = useState("actor")
const [phone,setPhone] = useState("03320365229")

const [submitResponce, setSubmitResponce] = useState('')
const [submitStatus, setSubmitStatus] = useState('')
const [show, setShow] = useState(false);

const [UpdateFname, setUpdateFname] = useState("")
const [UpdateLname, setUpdateLname] = useState("")
const [UpdateNumber, setUpdateNumber] = useState("")

const [UpdateEmail, setUpdateEmail] = useState("")
const [UpdatePassword, setUpdatePassword] = useState("")

const [UpdateSubj, setUpdateSubj] = useState("Maths")

const courses = ['Maths','Science','History', 'Geography', 'Add Maths', 'Biology','Computer Science']

useEffect( async () =>{

    
    try {
        await axios.get("https://localhost:44323/api/GetProfileInfo")
        .then((responce) => {
        
            setRole(responce.data['role'])
            setName(responce.data['firstName'])
            setPhone(responce.data['phoneNumber'])
    })
    } 
    catch (error) {
        console.error(error)
    }

})


const handleUpdatePersonal = async (e) => {

    const form = e.currentTarget;

    if (form.checkValidity() !== false){
        e.preventDefault();
        
        var data = {
            firstName : UpdateFname,
            lastName : UpdateLname,
            phoneNumber : UpdateNumber
        }

        if (role === "teacher"){
            data["subjects"] = UpdateSubj;
        }

        try {
            await axios.post("https://localhost:44323/api/UpdatePersonalInfo",
            data
            )
            .then((responce) => {
            
                if (responce.data === "Success"){

                    setSubmitStatus("Success");
                    setSubmitResponce("Data Updated Successfully");

                    setUpdateFname("")
                    setUpdateLname("")
                    setUpdateNumber("")

                    setName(UpdateFname)
                    setPhone(UpdateNumber)
                }
                else{
                    setSubmitStatus("Failed");
                    setSubmitResponce("An error occured, try again later");
                }
        })
        } 
        catch (error) {
            console.error(error)
        }
    
    }

    setShow(true)

}

const handleUpdateAccount = async (e) => {

    const form = e.currentTarget;

    if (form.checkValidity() !== false){
        e.preventDefault();
    
        try {
            await axios.post("https://localhost:44323/api/UpdateAccountInfo",
            {
                email : UpdateEmail,
                password : UpdatePassword
            }
            )
            .then((responce) => {
            
                if (responce.data === "Success"){
                    
                    setUpdateEmail("");
                    setUpdatePassword("")
                    setSubmitStatus("Success");
                    setSubmitResponce("Data Updated Successfully");
                }
                else if (responce.data === "Taken"){
                    
                    setSubmitStatus("Failed");
                    setSubmitResponce("Email is already registered");
                }
                else{
                    setSubmitStatus("Failed");
                    setSubmitResponce("An error occured, try again later");
                }
        })
        } 
        catch (error) {
            console.error(error)
        }
    
    }

    setShow(true)

}

return(

    <Container style={{backgroundColor:'',marginTop:'6vh'}}>

        <Row  style={{paddingLeft:'1vw'}}>
            <h1>{name}</h1>
            <h4>{role}</h4>
            <h5>{phone}</h5>
        </Row>

        <Row style={{paddingTop:'3vw',paddingLeft:'1vw',paddingRight:'1vw'}}>

                <Col style={{paddingright:'7vw'}}>
                    <Container style={{backgroundColor:'#3d3b35',borderRadius:'20px',paddingBottom:'30px', boxShadow:'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>

                            <h4 style={{paddingTop:'20px',textAlign:'center', paddingBottom:'40px', color:'white'}}>
                                Update Personal Details
                            </h4>

                            <Form style={{paddingLeft:'10px', paddingRight:'10px'}} onSubmit={handleUpdatePersonal}>
                                <Row>
                                    <Col>
                                        <Form.Group  className="mb-3">
                                            <Form.Label  style={{color:'white'}}>First Name</Form.Label>
                                            <Form.Control size="sm" type="text" placeholder="John" pattern="[A-Z][a-z]+" minLength={3} onChange={(e) => {setUpdateFname(e.target.value)}} value={UpdateFname} required/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group  className="mb-3">
                                            <Form.Label  style={{color:'white'}}>Last Name</Form.Label>
                                            <Form.Control size="sm" type="text" placeholder="Doe" pattern="[A-Z][a-z]+"  minLength={3} onChange={(e) => {setUpdateLname(e.target.value)}} value={UpdateLname} required/>
                                        </Form.Group>
                                    </Col>



                                </Row>


                                <Form.Group className="mb-3 pr-5 mt-3">
                                    <Form.Label style={{color:'white'}}>New Phone Number</Form.Label>
                                    <Form.Control type="text" size="sm" placeholder="03xxxxxxxxx" pattern="03[0-9]*.{9,9}" minLength={11} onChange={(e) => {setUpdateNumber(e.target.value)}} value={UpdateNumber} required/>
                                </Form.Group>

                                { role === "teacher" &&

                                <Row className="mt-4" >
                                    <Form.Label style={{color:'white'}}>New Subject</Form.Label>
                                    <DropdownButton id="dropdown-basic-button" title={UpdateSubj}>
                                    {courses.map((cour) => (
            
                                        <Dropdown.Item href="#/action-1" key={cour} onClick={() => {setUpdateSubj(cour)}}>{cour}</Dropdown.Item>

                                    ))
                                    }
                                    </DropdownButton>
                                </Row>

                                }
                                

                                <Row md={3} className='justify-content-center'>

                                    <Button size="sm" variant="primary" type="submit" style={{marginTop:'30px'}}>
                                        Update
                                    </Button>

                                </Row>

                            </Form>
                        </Container>
                </Col>

                <Col style={{paddingLeft:'7vw'}}>
                        
                        <Container style={{backgroundColor:'#3d3b35',borderRadius:'20px',paddingBottom:'30px', boxShadow:'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>

                            <h4 style={{paddingTop:'20px',textAlign:'center', paddingBottom:'40px', color:'white'}}>
                            Update Account Details
                            </h4>

                            <Form style={{paddingLeft:'10px', paddingRight:'10px'}} onSubmit={handleUpdateAccount}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{color:'white'}}>New Email address</Form.Label>
                                    <Form.Control type="email" size="sm" placeholder="Enter email" onChange={(e) => {setUpdateEmail(e.target.value)}} value={UpdateEmail}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{color:'white'}}>New Password</Form.Label>
                                    <Form.Control size="sm" type="password" placeholder="Password" minLength={4} onChange={(e) => {setUpdatePassword(e.target.value)}} value={UpdatePassword}/>
                                </Form.Group>

                                <Row md={3} className='justify-content-center'>

                                    <Button size="sm" variant="primary" type="submit" style={{marginTop:'30px'}}>
                                        Update
                                    </Button>

                                </Row>

                            </Form>


                        </Container>

                </Col>

        </Row>
        
        <Modal show={show} onHide={() => {setShow(false)}} animation={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{submitStatus}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitResponce}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {setShow(false)}}>
                        Okay
                    </Button>
                </Modal.Footer>
        </Modal>

            
    </Container>





);



}

export default Profile;