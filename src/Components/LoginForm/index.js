import React, { useState } from "react";
import API from "../../Util/API/API";
import {Redirect,useHistory} from "react-router-dom"

export default function LoginForm() {
    const history = useHistory();
    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const submitLogin = (event) => {
        event.preventDefault();
        console.log(loginState)
        API.logIn({
            email: loginState.email.trim(),
            password: loginState.password.trim()
        }).then(res => {
            console.log(res);
            if(res.email){
                history.goBack();
            }
        }).catch(err=>{
            console.log(err);
              history.push("/login");
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
      <h3>Login</h3>
      <div className='login-container row'>
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

        <div className='row'>
          <button className='btn-main' type='submit' onClick={submitLogin}>SUBMIT</button>
        </div>
      </div>
    </form>
  )
};