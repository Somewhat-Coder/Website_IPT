import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import ManageTeachers from './ManageTeachers';
import Logout from './Logout';
import Register from './Register';
import Profile from './Profile';
import TeacherPanel from './TeacherPanel';
import ManageRegistrations from './ManageRegistrations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'





const App = () => {

 
  return(
    <Router>
    <Navigation> </Navigation>
        <Routes>

          
                <Route path='/Home' element={<Home scroll="Top"/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/About' element={<Home scroll="About"/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/ManageTeachers' element={<ManageTeachers/>} />
                <Route path='/ManageRegistrations' element={<ManageRegistrations/>} />
                <Route path='/TeacherPanel' element={<TeacherPanel/>} />
                <Route path='/Logout' element={<Logout/>} />
                <Route path='/' element={<Home scroll="Top"/>} />
           
                
        </Routes>
    </Router>
    
  );
}

export default App;
