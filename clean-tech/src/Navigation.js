import { Navbar , Nav , Container} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './Navigation.css';





const Navigation = () => {

  return (
    <Navbar className='Navbar'>
    <Container>
    
    <Navbar.Brand href="#home" style={{color:'black',padding:7}}> T A C G F</Navbar.Brand>
    <Nav className="justify-content-end">
      <Link to="/Home" style={{textDecoration:'none',color:'black',padding:8}} > Home </Link>
      <Link to="/About" style={{textDecoration:'none',color:'black',padding:8}} > About </Link>
      {/* <NavDropdown
              title="Courses"
              menuVariant='dark'
            >
                <Link className="dropdown-item" to="/olevels">O'Levels</Link>
                <Link  className="dropdown-item" to="/alevels">A'Levels</Link>
                <Link  className="dropdown-item" to="/">Matriculation</Link>
      </NavDropdown> */}
      {/* <div className="nav-item dropdown"  >
       
  <a className="nav-link dropdown-toggle my+10" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Courses
  </a>

  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="/olevels">O'Levels</Link>
    <Link  className="dropdown-item" to="/alevels">A'Levels</Link>
    <Link  className="dropdown-item" to="#">Matriculation</Link>
    </ul>
  </div> */}

      <Link to="/Register" style={{textDecoration:'none',color:'black',padding:8}} > Register </Link>

     
      
      </Nav>
    </Container>
  </Navbar>
  
  );

}
export default Navigation;