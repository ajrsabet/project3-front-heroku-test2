import React from "react";
import LoginForm from "../Components/LoginForm";
import Header from '../Components/Header';
import './styles/Login/login.css';

export default function Login() {
  return (
    <div className='main'>
      <Header>
        <LoginForm />
      </Header>
    </div>
  )
}