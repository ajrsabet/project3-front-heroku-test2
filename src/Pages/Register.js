import React, { useState, useEffect } from "react";
import Form from "../Components/Form";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/registerpage.min.css';
import RegisterDrawer from "../Components/RegisterDrawer"

export default function Register() {

  const [activePage, setActivePage] = useState("Account Overview")

  useEffect(() => {
    switch (activePage) {
      case "Login":
        window.location.href = "/login";
        break;
      case "Logout":
        window.location.href = "/";
        break;
      case "Home":
        window.location.href = "/"
      default:
        break;
    }
  }, [activePage]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.availWidth < 824) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.screen.availWidth]);

  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <Navbar>
            <img onClick={()=>{setActivePage("Home")}} className='logo' src={logo} alt='logo'></img>
            <RegisterDrawer setActivePage={setActivePage} isMobile={isMobile} />
            {isMobile ? (<div />) : (
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/'>Logout</Link>
              </div>
            )}
          </Navbar>
          <div className='span-2-of-3'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}