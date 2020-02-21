import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/homepage.min.css';
import HomeDrawer from "../Components/HomeDrawer";
import API from "../Util/API/API";

function Home() {
  const [activePage, setActivePage] = useState("Account Overview")
  const [isMobile, setIsMobile] = useState(false);
  const [authState, setAuthState] = useState({
    loggedIn: false,
    userData: {}
  })

  // Check login status and redirect if not logged in
    useEffect(()=>{
      API.verifyLogin().then(res=>{
        if (res.data.email) {
          setAuthState({
            loggedIn: true,
            userData: res.data
          });
        } 
      }).catch(err=>{
        setAuthState({
          loggedIn: false
        });
        console.log(err);
      })
  },[])

  const logOut = ()=>{
    API.logOut().then(res=>{
      setAuthState({
        loggedIn: false
      });
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  } 

  useEffect(() => {
    switch (activePage) {
      case "login":
        window.location.href = "/login";
        break;
      case "register":
        window.location.href = "/register";
        break;
      case "logout":
        // window.location.href = "/register";
        break;
      case "charity":
        window.location.href = "/charity";
        break;
      case "supplier":
        window.location.href = "/supplier";
        break;
      default:
        break;
    }
  }, [activePage]);


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
            <HomeDrawer setActivePage={setActivePage} isMobile={isMobile} authState={authState} logOut={logOut}/>
            {isMobile ? (<div />) : (
              <div>
                {/* display routes if logged out */}
                {authState.loggedIn === false ? <a onClick={()=>{setActivePage("register")}}>Register</a> : <div/>}
                {authState.loggedIn === false ? <a onClick={()=>{setActivePage("login")}}>Login</a> : <div/>}
                {/* display routes if logged in */}
                {authState.loggedIn === true ? <a onClick={logOut} >Logout</a> : <div/>}
                {authState.loggedIn === true && authState.userData.companyType === "charity" ? <a onClick={()=>{setActivePage("charity")}}>Charity Profile</a> : <></>} 
                {authState.loggedIn === true && authState.userData.companyType === "supplier" ? <a onClick={()=>{setActivePage("supplier")}}>Supplier Profile</a> : <></>} 
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

