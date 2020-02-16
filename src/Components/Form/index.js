import React, { useState, useEffect } from "react";
import "./Form.css";
import API from "../../Util/API/API"

export default function Form(props) {
    let pw1, pw2;

    const [userState, setUserState] = useState({
        accountType: "",
        company: "",
        adminName: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        ein2: "",
        einRemaining: "",
        email: "",
        password: ""
    })

    const submitRegistration = (event) => {
        event.preventDefault();
        console.log(userState)
        pw1 = document.querySelector('#pw1').value;
        pw2 = document.querySelector('#pw2').value;
        (pw1 === pw2) ? console.log('passwords equal') : alert('passwords must match')
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
        <form className="form">
            <div className='input-container'>
                <label htmlFor="charity">Charity</label>
                <input value="checked"
                    onChange={handleInputChange}
                    type="checkbox"
                    name='charity' />
                <label htmlFor="supplier">Supplier</label>
                <input value={userState.accountType}
                    onChange={handleInputChange}
                    type="checkbox"
                    name='supplier' />
                <input
                    value={userState.company}
                    onChange={handleInputChange}
                    type='text'
                    name='company'
                    placeholder='COMPANY NAME'
                />
                <input
                    value={userState.adminName}
                    onChange={handleInputChange}
                    type='text'
                    name='adminName'
                    placeholder='ADMIN NAME'
                />
                <input value={userState.street}
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
                    name='ein-two'
                    placeholder='EIN'
                />
                <input
                    value={userState.einRemaining}
                    onChange={handleInputChange}
                    type='number'
                    name='ein-remaining'
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