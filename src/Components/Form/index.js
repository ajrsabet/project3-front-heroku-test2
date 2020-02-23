import React, { useState } from "react";
import API from "../../Util/API/API";

export default function Form() {
  // User input
  const [userState, setUserState] = useState({
    ein: "",
    accountType: "",
    company: "",
    adminFirstName: "",
    adminLastName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // split out ein from userState to verify nonprofit status
  const [einState, setEinState] = useState({
    ein: ""
  });

  // Verify input values
  const [verifyState, setVerifyState] = useState({
    simpleInput: false,
    einLength: false,
    zipLength: false,
    emailValid: false,
    passwordValid: false,
    passwordMatch: false
  });
  
  // Verify Inputs
  function verifyInput() {
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,128}$/; 
    
    // validate all data fields
    if (Object.values(userState).indexOf("") !== -1) {
      handleVerifyChange("simpleInput")
      // setVerifyState({
      //   ...verifyState,
      //   simpleInput: true
      // });
    };
    if (userState.zipCode.length === 5) {
      handleVerifyChange("zipLength")
      // setVerifyState({
      //   ...verifyState,
      //   zipLength: true
      // });
    };
    if (einState.ein.length === 9) {
      handleVerifyChange("einLength")
      // setVerifyState({
      //   ...verifyState,
      //   einLength: true
      // });
    };
    if (emailCheck.test(String(userState.email).toLowerCase())) {
      handleVerifyChange("emailValid")
      // setVerifyState({
      //   ...verifyState,
      //   emailValid: true
      // });
    };
    if (userState.password.match(passwordCheck)) {
      handleVerifyChange("passwordValid")
      // setVerifyState({
      //   ...verifyState,
      //   passwordValid: true
      // });
    };
    if (userState.password === userState.password2) {
      handleVerifyChange("passwordMatch")
      // setVerifyState({
      //   ...verifyState,
      //   passwordMatch: true
      // });
    };
    console.log(Object.values(userState).indexOf(""));
    console.log(Object.values(verifyState).indexOf(false));
    console.log(verifyState);
  }


function handleVerifyChange(item) {
  setVerifyState({
    ...verifyState,
    [item]: true
  });
}


    const submitRegistration = (event) => {
      event.preventDefault();
      
      if (Object.values(verifyState).indexOf(false) !== -1) {
        verifyInput();
      } else {
        ///// Create Company /////
        API.createCompany({
          company_name: userState.company.trim(),
          ein: einState.ein.trim(),
          account_type: userState.accountType
        }).then(res => {
          console.log(res);
          ///// Create user /////
          API.createUser({
            password: userState.password.trim(),
            first_name: userState.adminFirstName.trim(),
            last_name: userState.adminLastName.trim(),
            email: userState.email.toLowerCase().trim(),
            username: userState.email.toLowerCase().trim(),
            admin: 1, // maybe replace with user input
            CompanyProfileId: res.data.id
          }).then(res2 => {
            ///// Create location /////
            API.createLocation({
              address: userState.street.trim(),
              city: userState.city.trim(),
              state: userState.state.trim(),
              zip: userState.zipCode.trim(),
              CompanyProfileId: res.data.id
            }).then((res3) => {
              console.log(res3);
              ///// Login after data is added /////
              API.logIn({
                email: userState.email.trim(),
                password: userState.password.trim()
              }).then(res => {
                ///// Route to profile page /////
                if (res.data.companyType === "charity") {
                  window.location.href = "/charity";
                } else if (res.data.companyType === "supplier") {
                  window.location.href = "/supplier";
                } else {
                  alert("Account type not specified")
                  window.location.href = "/";
                }
              }).catch(err => {
                console.log(err);
              })
            }).catch(err => {
              console.log(err);
            })
          }).catch(err => {
            console.log(err);
          })
        }).catch(err => {
          console.log(err);
        })
      }
    }

    const handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      setUserState({
        ...userState,
        [name]: value
      });
    };

    // Verify ein for non-profit
    const handleEinInputChange = event => {
      const value = event.target.value;
      setEinState({
        ein: value
      });
      if (value.length === 9) {
        // console.log("anything");
        API.einChecker(
          value
        ).then(res => {
          console.log(res)
          alert(`The EIN matches: ${res.data.name} located at ${res.data.address}, ${res.data.city}, ${res.data.state}. Is this your company?`)
        }).catch(res => {
          console.log('This EIN does not match the charity EIN database' + res)
        })
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
                value='charity'
                onChange={handleInputChange}
                type="radio"
                name='accountType' />
            </label>

            <label>
              <input
                className='radio-button'
                value='supplier'
                onChange={handleInputChange}
                type="radio"
                name='accountType' />
              Supplier
            </label>
          </div>
          <input className='text-input'
            value={einState.ein}
            onChange={handleEinInputChange}
            type='number'
            name='ein'
            placeholder='EIN'
          />
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
            value={userState.email}
            onChange={handleInputChange}
            type='email'
            name='email'
            placeholder='EMAIL'
          />
          <input className='text-input'
            value={userState.password}
            onChange={handleInputChange}
            type='password'
            name='password'
            placeholder='PASSWORD'
          />
          <input className='text-input'
            value={userState.confirmPassword}
            onChange={handleInputChange}
            type='password'
            name='confirmPassword'
            placeholder='CONFIRM PASSWORD'
          />
          <button className='btn-main' type='submit' onClick={submitRegistration}>SUBMIT</button>
        </div>
      </form>
    )
  };