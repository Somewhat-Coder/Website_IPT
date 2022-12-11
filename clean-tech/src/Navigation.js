import { Navbar , Nav , Container} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import axios from "axios"
import './Navigation.css';
import { useEffect, useState } from 'react';





const Navigation = () => {

  const [role,setRole] = useState(" ")
  

   useEffect( async () =>{

    
      try {
          await axios.get("https://localhost:44323/api/GetRole")
          .then((responce) => {
          if (responce.data === "admin"){
            setRole("admin");
          }
          else if (responce.data === "teacher"){
            setRole("teacher");
          }
      })
      } 
      catch (error) {
          console.error(error)
      }
  })



  return (
    <Navbar className='Navbar'>
    <Container>
    
    <Navbar.Brand href="#home" style={{color:'black',padding:7}}> T A C G F</Navbar.Brand>
    <Nav className="justify-content-end">
      <Link to="/Home" style={{textDecoration:'none',color:'black',padding:8}} > Home </Link>
      <Link to="/About" style={{textDecoration:'none',color:'black',padding:8}} > About </Link>


      { role === " " &&
        <>
                <Link to="/Login" style={{textDecoration:'none',color:'black',padding:8}} > Login </Link>
                <Link to="/Register" style={{textDecoration:'none',color:'black',padding:8}} > Register </Link>
        </>
      }

      
      { role === "admin" &&
        <>
          <Link to="/Profile" style={{textDecoration:'none',color:'black',padding:8}}> My Profile </Link>
          <NavDropdown title="Manage" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/ManageRegistrations">Registrations</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ManageTeachers">Teachers</NavDropdown.Item>
            </NavDropdown>
          <Link to="/Logout" style={{textDecoration:'none',color:'black',padding:8}}> Logout </Link>
        </>
      } 

      { role === "teacher" &&
        <>
          <Link to="/Profile" style={{textDecoration:'none',color:'black',padding:8}}> My Profile </Link>
          <Link to="/TeacherPanel" style={{textDecoration:'none',color:'black',padding:8}}> Registrations </Link>
          <Link to="/Logout" style={{textDecoration:'none',color:'black',padding:8}}> Logout </Link>
        </>
      } 
      

     
      
      </Nav>
    </Container>
  </Navbar>
  
  );

}
export default Navigation;