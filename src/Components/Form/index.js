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
    email: "",
    password: ""
  })

  const [einState, setEinState] = useState({ ein: "" })

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
        ein: einState.ein.trim(),
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

  // Varify ein for non-profit
  const handleEinInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setEinState({
      [name]: value
    });
    if (value.length > 8) {
      console.log("anything");
      API.einChecker(
        value
      ).then(result => console.log(result))
    }
  };

  return (
    <form className="register-form row">
      <div className='input-container'>
        <h3>Account Setup</h3>
        <div className='radios'>
          <label>
            Charity
            <input
              className='radio-button'
              value={userState.accountType}
              data-value='charity'
              onChange={handleInputChange}
              type="radio"
              name='account-type' />
          </label>

          <label>
            <input
              className='radio-button'
              value={userState.accountType}
              data-value='supplier'
              onChange={handleInputChange}
              type="radio"
              name='account-type' />
            Supplier
            </label>

        </div>
        <input className='text-input'
          value={userState.company}
          onChange={handleInputChange}
          type='text'
          name='company'
          placeholder='COMPANY NAME'
        />
        <input className='text-input'
          value={userState.adminFirstName}  // Changed the value  
          onChange={handleInputChange}
          type='text'
          name='adminFirstName'  // CHanged the name
          placeholder='ADMIN FIRST NAME' // changed the place holder
        />
        <input className='text-input'
          value={userState.adminLastName} // Added another input for last name 
          onChange={handleInputChange} //----------------
          type='text' //---------------
          name='adminLastName' //-----------------
          placeholder='ADMIN LAST NAME' //----------------
        />
        <input className='text-input'
          value={userState.street}
          onChange={handleInputChange}
          type='text'
          name='street'
          placeholder='STREET ADDRESS'
        />
        <input className='text-input'
          value={userState.city}
          onChange={handleInputChange}
          type='text'
          name='city'
          placeholder='CITY'
        />
        <input className='text-input'
          value={userState.state}
          onChange={handleInputChange}
          type='text'
          name='state'
          placeholder='STATE'
        />
        <input className='text-input'
          value={userState.zipcode}
          onChange={handleInputChange}
          type='number'
          name='zipCode'
          placeholder='ZIPCODE'
        />
        <input className='text-input'
          value={userState.ein}
          onChange={handleEinInputChange}
          type='number'
          name='ein'
          placeholder='EIN'
        />
        <input className='text-input'
          value={userState.email}
          onChange={handleInputChange}
          type='email'
          name='email'
          placeholder='EMAIL'
        />
        <input className='text-input'
          value={userState.userName}
          onChange={handleInputChange}
          type='text'
          name='userName'
          placeholder='USER NAME'
        />
        <input className='text-input'
          value={userState.password}
          onChange={handleInputChange}
          type='password'
          name='password'
          placeholder='PASSWORD'
          id='pw1'
        />
        <input className='text-input'
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