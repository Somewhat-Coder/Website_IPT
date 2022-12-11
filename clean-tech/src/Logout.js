import { useState , useEffect} from 'react';
import { Modal , Button} from 'react-bootstrap';
import axios from "axios";
import './Profile.css';
import { useNavigate } from "react-router-dom";





const Logout = (props) => {


    const [show, setShow] = useState(false);
    const [logout, setLogout] = useState(false);
    const nav = useNavigate();


    useEffect(() => {

        if(props){
            setShow(true);
        }

    })

    const handleLogout = async () => {

        try {
            await axios.post("https://localhost:44323/api/Logout", 
                {
                    task : "logout"
                }
            )
            .then((responce) => {
            if (responce.data === "Success"){
                setShow(false);
                nav("/Home")
                window.location.reload();
            }

        })
        } catch (error) {
         
           console.error(error)
    }

    setShow(false);
    }


    const handleClose = () => {

        setShow(false);
        nav(-1);
    }


    return(

        <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to logout?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleLogout}>
                yes
            </Button>
        </Modal.Footer>
        </Modal>

    );

}


export default Logout;