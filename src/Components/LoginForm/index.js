import React, { useState } from "react";

export default function LoginForm() {

    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const submitRegistration = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginState({
            [name]: value
        });
    };

    
    return (
        <form className="login-form">
            <div className='login-container'>
                <input
                    value={loginState.email}
                    onChange={handleInputChange}
                    type='email'
                    name='email'
                    placeholder='EMAIL'
                />
                <input
                    value={loginState.password}
                    onChange={handleInputChange}
                    type='password'
                    name='password'
                    placeholder='PASSWORD'
                    id='pw1'
                />
                <button type='submit' onClick={submitRegistration}>SUBMIT</button>
            </div>
        </form>
    )
};