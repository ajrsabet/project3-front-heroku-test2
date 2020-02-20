import React from "react";

export default function EditProfile(props) {
  return (
    <div className='edit-container'>
      <h1> Edit Profile </h1>
      <div className='row'>
        <p>Company Name</p>
        <input placeholder=""></input>
        <p>Admin Name</p>
        <input placeholder=""></input>
      </div>

      <div className='row'>
        <p>Street Address</p>
        <input placeholder=""></input>
      </div>

      <div className='row'>
        <p>City</p>
        <input placeholder=""></input>
        <p>State</p>
        <input type='number' placeholder=""></input>
        <p>Zipcode</p>
        <input type='number' placeholder=""></input>
      </div>

      <div className='row'>
        <p>EIN</p>
        <input type='number' placeholder=""></input>
      </div>

      <div className='row'>
        <p>Email</p>
        <input placeholder=""></input>
        <p>Password</p>
        <input placeholder=""></input>
      </div>


      <button className='btn-main'>Submit</button>
      {/* Add confirm password? Also add API calls to change this info in DB */}
    </div>
  )
}


// isabel: 'this is going deep right now.....'