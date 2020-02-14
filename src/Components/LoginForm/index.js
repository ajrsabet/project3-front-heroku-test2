import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm(props) {

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
        <form className="loginForm">
            <div className='input-container'>
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