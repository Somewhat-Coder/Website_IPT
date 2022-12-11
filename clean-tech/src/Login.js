import { useState , useEffect} from 'react';
import { Modal , Button, Form} from 'react-bootstrap';
import axios from "axios";
import {Container , Row, Col,FloatingLabel,Dropdown, DropdownButton} from 'react-bootstrap';
import './Login.css';
import { useNavigate } from "react-router-dom";




const Login = () => {

    const [signUp, setSignUp] = useState(false)
    const [submitResponce, setSubmitResponce] = useState('')
    const [submitStatus, setSubmitStatus] = useState('')
    const [show, setShow] = useState(false);
    const [loginState, setLoginState] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [LName, setLname] = useState("")
    const [phone, setPhoneNumber] = useState("")
    const [course, setCourse] = useState("Subject")

    const courses = ['Maths','Science','History', 'Geography', 'Add Maths', 'Biology','Computer Science']
    const nav = useNavigate();

    // useEffect (() => {
    //     azurefunction();
    // },[])

    // async function azurefunction() {
    //     let response = await fetch(`http://localhost:7071/api/Thankyou?name=%27Merub%27`, {  
    //         method: 'GET', 
    //         crossorigin: true,  
    //         mode: 'no-cors',     
    //       }) ;
    //       if (response) {
    //     console.log(response);
    //       }
    //     }

    const checkLogin = () =>{

        var i = 0;
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            i = 1;
        }
        
        if(password.length < 4){
            i = 1;
        }
        return i;
    }

    const checkSignup = () =>{

        var i = 0;
        if(checkLogin() === 1){
            i = 1;
        }
        
        if(phone.length !== 11){
            i = 1;
        }

        if(course === "Subject"){
            i = 1;
        }

        if( !/^[a-zA-Z]+$/.test(fName)){
            i = 1;
            console.log("name")
        }
        if( !/^[a-zA-Z]+$/.test(LName)){
            i = 1;
            console.log("name")
        }
        return i;
    }



    const handleLogin = async () =>{

        if (checkLogin() === 1){

            setSubmitStatus("Failed!")
            setSubmitResponce("input format does not match")
            setShow(true)
        }

        else{

            const data = {
                email : email,
                password : password
            }
          
            try {
                    await axios.post("https://localhost:44323/api/Login", 
                        data
                    )
                    .then((responce) => {
                    if (responce.data === "Success"){
                        setSubmitResponce("Login Successful")
                        setSubmitStatus("Success")
                        setSignUp(false);
                        setLoginState(true);
                    }
                    else{
                        setSubmitResponce("Invalid email/password, retry")
                        setSubmitStatus("Failed")
                        setLoginState(false);
                        
                    }
                })
                } catch (error) {
                    console.error(error)
            }
        }
        
    setShow(true);    
    }

    const handleSignUp = async () =>{

        if (checkSignup() === 1){

            setSubmitStatus("Failed!")
            setSubmitResponce("input format does not match")
        }

        else{

            const data = {
                firstName : fName,
                lastName : LName,
                phoneNumber : phone,
                email : email,
                password : password,
                subjects : course
            }
          
            try {
                    await axios.post("https://localhost:44323/api/SignUp", 
                        data
                    )
                    .then((responce) => {
                    if (responce.data === "Success"){
                        console.log(responce.data)
                        setSubmitResponce("Wooho! You are Registered!!!")
                        setSubmitStatus("SignUp Successful")
                        setSignUp(false);
                    }
                    else{
                        console.log(data)
                        console.log(responce.data)
                        setSubmitResponce("Email has already been taken")
                        setSubmitStatus("SignUp Failed")
                    }
                })
                } catch (error) {
                    console.error(error)
            }
        }
        
        setShow(true);

    }


    const handleModal = () => {

        
        if (loginState){
            nav('/Home');
            window.location.reload();
        }
        setShow(false);
    
}

    return(


        <Container className='signinContainer' style={{margin: '0 auto', marginTop : '10vh',padding:'50px',maxWidth:'600px'}}>

            <Row style={{display:'inline-flex'}}>
                <Col>
                <Button variant="outline-secondary" onClick={() => {setSignUp(false)}}>Login</Button>
                </Col>
                <Col>
                <Button variant="outline-secondary" onClick={() => {setSignUp(true)}}>Signup</Button>
                </Col>
            </Row>

            <Row style={{paddingTop:'20px', paddingBottom:'20px'}}>
                {signUp ? <h1 style={{textAlign:'center',color:'white'}}>Signup</h1> : <h1 style={{textAlign:'center',color:'white'}}>Login</h1> }
            </Row>


            { signUp ? 
               
               <Row className="mb-5" style={{ marginLeft:'0'}}>
                        <Row className="mb-3" style={{ padding:'1px'}}>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="First Name" style={{paddingTop:'10px'}} >
                                    <Form.Control type="fname" onChange={(e) => {setFName(e.target.value)}} placeholder="John" size="sm" style={{height:'40px'}}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel controlId="floatingInput" label="Last Name" style={{paddingTop:'10px'}} >
                                    <Form.Control type="lname" onChange={(e) => {setLname(e.target.value)}} placeholder="John" size="sm" style={{height:'40px'}}/>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row style={{ padding:'0px'}}>
                            <Col>
                            <FloatingLabel controlId="floatingInput" label="Phone Number" style={{paddingTop:'10px'}} >
                                    <Form.Control type="phone" onChange={(e) => {setPhoneNumber(e.target.value)}} pattern="03[0-9]*.{9,9}" placeholder="Phone Number" maxLength={11} size="sm" style={{height:'40px'}}/>
                            </FloatingLabel>
                            </Col>


                            <Col style={{paddingTop: '11px'}} >

                                <DropdownButton id="dropdown-basic-button" title={course}>
                                {courses.map((cour) => (
        
                                    <Dropdown.Item href="#/action-1" key={cour} onClick={() => {setCourse(cour)}}>{cour}</Dropdown.Item>

                                ))
                                }
                                </DropdownButton>
                                
                            </Col>
                        </Row>

               </Row>             
            : 
                
               <div>
               </div> 
                
            }



            <Row style={{ padding:'0px'}}>


                <FloatingLabel controlId="floatingInput" label="email" style={{padding:'7px'}} >
                        <Form.Control type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="example@gmail.com" size="sm" style={{height:'40px'}} required/>
                </FloatingLabel> 

            </Row>

            <Row>
                 <FloatingLabel controlId="floatingInput" label="password" style={{padding:'7px'}} >
                        <Form.Control type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="example@gmail.com" size="sm" style={{height:'40px'}} required/>
                </FloatingLabel>

            </Row>

            
            <Row className="justify-content-md-center pt-3" md={4}>

                {signUp ? <Button variant="primary" size="md" onClick={handleSignUp}>Signup</Button> : 
                
                <Button variant="primary" size="md" className="mt-4"onClick={handleLogin}>Login</Button> }

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



export default Login;