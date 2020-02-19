import React from "react";
import Form from "../Components/Form";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/registerpage.min.css';

export default function Register() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <Navbar>
            <img className='logo' src={logo} alt='logo'></img>
            <Link to='/'>Logout</Link>
          </Navbar>
          <div className='span-2-of-3'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}