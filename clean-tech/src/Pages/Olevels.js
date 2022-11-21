import React from 'react'
import { Container , Modal, Button} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'










const Olevels = (props) =>  {

  const [course, setCourse] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [submitResponce, setSubmitResponce] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault()

    const data = {
      Email : email,
      Contact : contact,
      Course : course
    }

    try{
      await axios.post("http://3.110.187.14:5000/api/olevelRegister", {
        data
      }).then((responce) => {

            if (responce.data === 'Success'){
              setSubmitResponce("Wooho! You are Registered!!!")
              setSubmitStatus("Submission Successful")
          }
          else{
              setSubmitResponce("A technical issue has been occured")
              setSubmitStatus("Submission Failed")
          }
      })
    }
    catch(error){
      console.log(error)
    }
    
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (

    <div>
        <Container className='mb-5'>
        <h1
          className="text-center my-3">
         {props.board} Courses
          </h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <img src="8.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <p>{props.course1}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course1)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
        
       





<div className="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Course Registration</h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{course}</h5>

  <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="InputEmail" placeholder="Your email" aria-describedby="emailHelp" value={email} onChange = {(e) => setEmail(e.target.value)} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
  <input type="text" className="form-control" pattern="03[0-9]*.{9,9}" maxLength={11} id="InputContact" placeholder="Your Phone Number" value={contact} onChange = {(e) => setContact(String(e.target.value))} required/>
  </div>


  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    

  </div>
</div>
      
  



     
    
      
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
    <img src="10.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course2}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course2)}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
    
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card">
    <img src="9.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course3}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course3)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
    <img src="14.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course4}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course4)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
    <img src="15.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course5}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course5)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
    <img src="17.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course6}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course6)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
    <img src="16.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <p>{props.course7}</p>
      <button className="btn btn-primary" type="button" onClick={() => setCourse(props.course7)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Register Now</button>
      </div>
    </div>
  </div>
  <Modal show={show} animation={true} onHide={handleClose} centered>
              <Modal.Header closeButton>
                  <Modal.Title>{submitStatus}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {submitResponce}
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                      Okay
                  </Button>
              </Modal.Footer>
    </Modal>

</div>
</Container>
    </div>
  )
}


export default Olevels;