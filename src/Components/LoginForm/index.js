import React, { useState } from "react";
import API from "../../Util/API/API";
import {Redirect,useHistory} from "react-router-dom"

export default function LoginForm() {
    const history = useHistory();
    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
    })

    const submitLogin = (event) => {
        event.preventDefault();
        console.log(loginState)
        API.logIn({
            username: loginState.username.trim(),
            password: loginState.password.trim()
        }).then(res => {
            if(res){
                history.goBack();
            }
        })
    }

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginState({
            ...loginState,
            [name]: value
        });
    };


    return (
        <form className="login-form">
            <div className='login-container'>
                <input
                    value={loginState.username}
                    onChange={handleInputChange}
                    type='text'
                    name='username'
                    placeholder='USERNAME'
                />
                <input
                    value={loginState.password}
                    onChange={handleInputChange}
                    type='password'
                    name='password'
                    placeholder='PASSWORD'
                />
                <button type='submit' onClick={submitLogin}>SUBMIT</button>
            </div>
        </form>
    )
};