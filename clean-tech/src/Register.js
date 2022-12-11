import './Register.css'
import { useState } from 'react';
import { Modal , Button, Form} from 'react-bootstrap';
import axios from "axios"






const Register = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [contact, setContact] = useState('');
    const [mode, setMode] = useState('Home Tuition');
    const [hours, setHours] = useState(1);
    const [subjects, setSubjects] = useState([]);
    const [fees, setFees] = useState();

    
    const [show, setShow] = useState(false);
    const [submitResponce, setSubmitResponce] = useState('')
    const [submitStatus, setSubmitStatus] = useState('')
    const [subjectNotSelected, setSubjectNotSelected] = useState(true);

    const courses = ['Maths','Science','History', 'Geography', 'Add Maths', 'Biology','Computer Science']



    const handleClose = () => {
        setShow(false)
        
        if (submitStatus !== "Submission Failed"){
        window.location.reload(); 
        }
    }




    const handleSubmit = async (e) => {

        const form = e.currentTarget;

        if (form.checkValidity() !== false){

        e.preventDefault();
        console.log("VALIDATION SUCCESS")
    

        const data = {
            fullName : name,
            gender : gender,
            phoneNumber : contact,
            mode : mode,
            hours : parseInt(hours),
            courses : subjects,
            expFees : parseInt(fees)
        }

        try {
                    await axios.post("https://localhost:44323/api/RegisterStudent", 
                    data
                )
            .then((responce) => {
                if (responce.data === "Success"){
                    console.log(responce.data)
                    setSubmitResponce("Wooho! You are Registered!!!")
                    setSubmitStatus("Submission Successful")
                }
                else{
                    setSubmitResponce("A technical issue has been occured")
                    setSubmitStatus("Submission Failed")
                }
            })
            } catch (error) {
                console.error(error)
        }
   

        setShow(true);
    }

    else{
  
        e.preventDefault();
        e.stopPropagation();
        console.log("VALIDATION FAILED")
    }
        
        
    }

    const handleSubject = (subj) => {
        
        let newSubjects = subjects
        let ind = newSubjects.indexOf(subj)

        if(ind === -1){
            newSubjects.push(subj)
        }
        else{
            newSubjects.splice(ind, 1); 
        }

        setSubjects(newSubjects)

        if (subjects.length !== 0){
            setSubjectNotSelected(false)
        }
        else {
            setSubjectNotSelected(true)
        }
    }

  return (

        <div className='Container needs-validation' noValidate>

            <form onSubmit={handleSubmit}>
                <h3>Personal Info</h3>
                <div className='form-row mb-5 mt-2'>
    
                    <div className='col-md-3 pr-3'>
                        <div className="form-group">
                            <label htmlFor="InputName">Full Name (Lower Case Only)</label>
                            <input type = "text" className="form-control" id="InputName" maxLength={50} pattern="[a-z' 'a-z]+" placeholder="Your Name" value = {name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    </div>

                    <div className='row'>
                        <label htmlFor="InputName">Gender</label>
                        <div className='col mt-2 mb-3'>
                            <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" onChange={(e) => setGender("Male")} defaultChecked/>
                            <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" onChange={(e) => setGender("Female")} className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline3" name="customRadioInline1" onChange={(e) => setGender("Other")} className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadioInline3">Other</label>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-3'>
                        <div className="form-group">
                            <label htmlFor="InputContact">Contact (03xxxxxxxxxx)</label>
                            <input type="text" className="form-control" pattern="03[0-9]*.{9,9}" maxLength={11} id="InputContact" placeholder="Your Phone Number" value={contact} onChange = {(e) => setContact(String(e.target.value))} required/>
                        </div>
                    </div>

                </div>
                


                <h3>Tuition Details</h3>
                <div className='row mt-2'>
                    <div className='col-md-3'>
                        <div className="form-group">
                            <label htmlFor="InputMode">Mode</label>
                            <select id="InputMode" onChange = {(e) => setMode(e.target.value)} className="custom-select mr-sm-2">
                            <option defaultChecked>Home Tuition</option>
                            <option>Coaching Center</option>
                            <option>Online</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <label htmlFor="InputHoursPerday">Hours Per Day</label>
                                    <select id="InputHoursPerday" onChange = {(e) => setHours(e.target.value)} className="custom-select mr-sm-2">
                                    <option defaultChecked>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                


                <div className='row mt-3 mb-5 justify-content-start'>

                            <h3>Subjects</h3>

                            {courses.map((course) => (
                            <div key={`inline-checkbox-${course}`} className='col-lg-3'>
                              <Form.Check
                                label={course}
                                name="group1"
                                type='checkbox'
                                id={`inline-checkbox`}
                                className='mt-2'
                                onClick={(e) => handleSubject(course)}
                                required = {subjectNotSelected}
                              />
                            </div>
                            ))
                            }
                </div>

                <div className='col-md-3 pr-3'>
                        <div className="form-group">
                            <label htmlFor="InputEmail">Expected Fees</label>
                            <input type="number" className="form-control" id="InputFees" placeholder="PKR" onChange = {(e) => setFees(e.target.value)} min="1000" max="20000" step="500" required/>
                        </div>
                    </div>
                


                <div className='row justify-content-center'>
                    <button id='xxx1' type="submit" className="btn btn-primary col-4">Submit</button>
                </div>
            </form>
      
            <Modal show={show} onHide={handleClose} animation={true} centered>
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

 );
 }

export default Register;