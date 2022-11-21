import React from 'react'

export default function Faculty() {
  return (
    <div>
      
      <h1
          class="text-center my-3">
         Faculty
          </h1>

 <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
  <div className="col">
    <div className="card">
      <img src="item10.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="text-center">Gold Queen Jhumka</h5>
        <p className="text-center">PKR 799</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="item5.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="text-center">Pink Glamour</h5>
        <p className="text-center">PKR 599</p> </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="item02.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="text-center">Massouri Gold</h5>
        <p className="text-center">PKR 599</p></div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="item3.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="text-center">Brownie Studs</h5>
        <p className="text-center">PKR 450</p></div>
  
    </div>
  </div>
</div>
    </div>
  )
}
