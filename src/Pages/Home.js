import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/homepage.min.css';
import HomeDrawer from "../Components/HomeDrawer";
import API from "../Util/API/API"

function Home() {

  const [activePage, setActivePage] = useState("Account Overview")

  useEffect(() => {
    switch (activePage) {
      case "Login":
        window.location.href = "/login";
        break;
      case "Register":
        window.location.href = "/register";
        break;
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
    <div >

      <div className='container main'>
        <div className='row'>
          <Navbar>
            <img className='logo' src={logo} alt='logo'></img>
            <HomeDrawer setActivePage={setActivePage} isMobile={isMobile} />
            {isMobile ? (<div />) : (
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/charity'>Profile</Link>
              </div>
            )}
          </Navbar>
        </div>
        <div className='main-text'>
          <h1>Some fancy shit to say about food and planet yea</h1>
          <a href='#main-info'>Learn more</a>
        </div>
      </div>

      <div className='container home-page-data'>
        <div className='row'>
          <div className='main-info' id='main-info'>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="far fa-trash-alt fa-2x"></i></p>
              <p>Hella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshit</p>
            </div>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="far fa-handshake fa-2x"></i></p>
              <p>Hella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshit</p>
            </div>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="fas fa-globe-americas fa-2x"></i></p>
              <p>Hella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshit</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Home;

