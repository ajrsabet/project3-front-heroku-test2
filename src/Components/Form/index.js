import React, { useState } from "react";
import API from "../../Util/API/API"

export default function Form() {
  let pw1, pw2;

  const [userState, setUserState] = useState({
    accountType: "", // State doesn't change when choosing an option & we can choose both options
    company: "",
    adminFirstName: "", //Admin first name
    adminLastName: "", //Admin last name- both needed for the user model
    street: "",
    city: "",
    state: "",
    zipcode: "",
    ein2: "",         // Can't type in the field
    einRemaining: "", // Can't type in the field
    email: "",
    password: ""
  })


  const submitRegistration = (event) => {
    event.preventDefault();
    console.log(userState)
    pw1 = document.querySelector('#pw1').value;
    pw2 = document.querySelector('#pw2').value;
    (pw1 === pw2) ? console.log('passwords equal') : alert('passwords must match')

    //API call to update 3 tables
    API.createCompany({
      company_name: userState.company,
      ein: userState.ein2,
      // account_type: userState.accountType
    }).then(res => {
      console.log(res);

      API.createUser({
        username: userState.email,
        password: userState.password,
        first_name: userState.adminFirstName,
        last_name: userState.adminLastName,
        email: userState.email,
      }).then(data => {
        console.log(data);
        API.createLocation({
          address: userState.street,
          city: userState.city,
          state: userState.state,
          zip: userState.zipcode,
          ein: userState.ein2,
        })
        res.json(data)

      })


    })
    //------------------------------------------------
  }

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUserState({
      ...userState,
      [name]: value
    });

  };

  return (
    <form className="register-form">
      <div className='input-container'>
        <label htmlFor="charity">Charity</label>
        <input
          className='radio-button'
          value="checked"
          onChange={handleInputChange}
          type="radio"
          name='account-type' />
        <label htmlFor="supplier">Supplier</label>
        <input
          className='radio-button'
          value={userState.accountType}
          onChange={handleInputChange}
          type="radio"
          name='account-type' />
        <input
          value={userState.company}
          onChange={handleInputChange}
          type='text'
          name='company'
          placeholder='COMPANY NAME'
        />
        <input
          value={userState.adminFirstName}  // Changed the value  
          onChange={handleInputChange}
          type='text'
          name='adminFirstName'  // CHanged the name
          placeholder='ADMIN FIRST NAME' // changed the place holder
        />
        <input
          value={userState.adminLastName} // Added another input for last name 
          onChange={handleInputChange} //----------------
          type='text' //---------------
          name='adminLastName' //-----------------
          placeholder='ADMIN LAST NAME' //----------------
        />
        <input
          value={userState.street}
          onChange={handleInputChange}
          type='text'
          name='street'
          placeholder='STREET ADDRESS'
        />
        <input
          value={userState.city}
          onChange={handleInputChange}
          type='text'
          name='city'
          placeholder='CITY'
        />
        <input
          value={userState.state}
          onChange={handleInputChange}
          type='text'
          name='state'
          placeholder='STATE'
        />
        <input
          value={userState.zipcode}
          onChange={handleInputChange}
          type='number'
          name='zipcode'
          placeholder='ZIPCODE'
        />
        <input
          value={userState.ein2}
          onChange={handleInputChange}
          type='number'
          name='ein2'
          placeholder='EIN'
        />
        <input
          value={userState.einRemaining}
          onChange={handleInputChange}
          type='number'
          name='einRemaining'
          placeholder='EIN-7-Digits' // Added a placd holder for the input
        />
        <input
          value={userState.email}
          onChange={handleInputChange}
          type='email'
          name='email'
          placeholder='EMAIL'
        />
        <input
          value={userState.password}
          onChange={handleInputChange}
          type='password'
          name='password'
          placeholder='PASSWORD'
          id='pw1'
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='CONFIRM PASSWORD'
          id='pw2'
        />
        <button type='submit' onClick={submitRegistration}>SUBMIT</button>
      </div>
    </form>
  )
};