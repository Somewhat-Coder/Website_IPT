import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";






export default function Alevels(props) {


  return (
    <Container className='mb-5'>
    <h1
      className="text-center my-3">
     {props.board} Courses
      </h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
<div className="col">
<div className="card">
<img src="11.png" className="card-img-top" alt="..."/>
  <div className="card-body">
 
  <Link to="/Register" className="btn btn-primary">Register Now</Link>
  </div>
</div>
</div>

<div className="col">
<div className="card">
<img src="12.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <Link to="/Register" className="btn btn-primary">Register Now</Link>
  </div>
</div>
</div>

<div className="col">
<div className="card">
<img src="13.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <Link to="/Register" className="btn btn-primary">Register Now</Link>
  </div>
</div>
</div>







</div>
</Container>
          
  )
}
