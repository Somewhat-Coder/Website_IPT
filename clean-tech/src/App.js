import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react';
import Olevels from './Pages/Olevels';
import Alevels from './Pages/Alevels';
import Register_Course from './Pages/Register_Course';




const App = () => {

  const message = "-->Connection Established With React<--"


  // const httpsAgent = new https.Agent({
  //   // rejectUnauthorized: false, // (NOTE: this will disable client verification)
  //   cert: fs.readFileSync("cert.pem"),
  //   key: fs.readFileSync("key.pem"),
  //   // passphrase: "12345"
  // })
 
  // https.globalAgent.options.rejectUnauthorized = false;

  useEffect( () => {

    const conn = async() => {
    try {
			  await axios.post("http://3.110.187.14:5000/api/start",
         {
				message
			},
      )
      .then((responce) => console.log(responce.data))
		} catch (error) {
			console.error(error)
		}}
    conn()
  },[]);



  return (
    <Router>
    <Navigation> </Navigation>
        <Routes>
                <Route path='/Home' element={<Home scroll="Top"/>} />
                <Route path='/About' element={<Home scroll="About"/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/' element={<Home scroll="Top"/>} />
                {/* <Route path='/Olevels' element={<Olevels board="O'Levels"
                course1='Computer Science with Sir. Muzammil Arif Zuberi'
                course2='Urdu-Second Language with Miss. Midhat Karim'
                course3='Mathematics with Sir. Mohib Tariq'
                course4='Physics with Miss. Rutba Asghari'
                course5='Pakistan Studies with Miss. Zoha Mobin'
                course6='Additional Mathematics with Sir. Mohib Rehman'
                course7='Islamiat with Sir. Mahad Mirza'/>} />
                <Route path='/Alevels' element={<Alevels board="A'Levels"/>} /> */}
                <Route path='/RegisterCourse' element={<Register_Course board="A'Levels"/>} />
           
                
        </Routes>
    </Router>
    
  );
}

export default App;
