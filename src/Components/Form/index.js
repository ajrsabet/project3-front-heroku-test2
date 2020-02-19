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
    zipCode: "",
    ein: "",
    email: "",
    password: ""
  })


  const submitRegistration = (event) => {
    event.preventDefault();
    pw1 = document.querySelector('#pw1').value;
    pw2 = document.querySelector('#pw2').value;
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/;

    // validate all data fields
    if (!userState.accountType && !userState.adminFirstName && !userState.adminLastName && !userState.street && !userState.email) {
      alert("All fields are required");
    } else if (userState.zipCode.length !== 5) {
      alert("zip code must be 5 digits");
    } else if (userState.ein.length !== 9) {
      alert("ein must be 9 digits")
    } else if (!emailCheck.test(String(userState.email).toLowerCase())) {
      alert("enter a valid email")
    } else if (!userState.password.match(passwordCheck)) {
      alert("password must be 8-128 characters and contain at least one lower, upper, special, and number")
    } else if (pw1 !== pw2) {
      alert("your passwords do not match")
    } else { 
    //API call to update 3 tables
    API.createCompany({
      company_name: userState.company.trim(),
      ein: userState.ein.trim(),
      account_type: 1
    }).then(res => {
      console.log(res);
      API.createUser({
        username: userState.userName.toLowerCase().trim(),
        password: userState.password.trim(),
        first_name: userState.adminFirstName.trim(),
        last_name: userState.adminLastName.trim(),
        email: userState.email.toLowerCase().trim(),
        admin: 1, // maybe replace with user input
        CompanyProfileId: res.data.id
      }).then(res2 => {
        API.createLocation({
          address: userState.street.trim(),
          city: userState.city.trim(),
          state: userState.state.trim(),
          zip: userState.zipCode.trim(),
          CompanyProfileId: res.data.id
        })
      }).then((res3) => {
        console.log(res3);
        alert("You have successfully created an account!")
        window.location.href = `/charity`;
      })
    })
  }
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
          value={userState.zipCode}
          onChange={handleInputChange}
          type='number'
          name='zipCode'
          placeholder='ZIPCODE'
          maxlength='5'
        />
        <input
          value={userState.ein}
          onChange={handleInputChange}
          type='number'
          name='ein'
          placeholder='EIN'
          maxlength= '9'
        />
        <input
          value={userState.email}
          onChange={handleInputChange}
          type='email'
          name='email'
          placeholder='EMAIL'
        />
        <input
          value={userState.userName}
          onChange={handleInputChange}
          type='userName'
          name='userName'
          placeholder='USER NAME'
        />
        <input
          value={userState.password}
          onChange={handleInputChange}
          type='password'
          name='password'
          placeholder='PASSWORD'
          id='pw1'
          maxlength='128'
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='CONFIRM PASSWORD'
          id='pw2'
          maxlength='128'
        />
        <button type='submit' onClick={submitRegistration}>SUBMIT</button>
      </div>
    </form>
  )
};