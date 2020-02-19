import React from "react";
import LoginForm from "../Components/LoginForm";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/loginform.min.css';

export default function Login() {
  return (
    <div className='container main'>
      <div className='row'>
        <Navbar>
          <img className='logo' src={logo} alt='logo'></img>
          <Link to='/'>Logout</Link>
        </Navbar>
      </div>
      <div className='row'>
        <LoginForm/>
      </div>
    </div>
  )
}