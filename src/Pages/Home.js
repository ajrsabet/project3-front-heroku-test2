import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/homepage.min.css';
import HomeDrawer from "../Components/HomeDrawer";
import API from "../Util/API/API";

function Home() {

  // State variables
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

// route navigation
  useEffect(() => {
    switch (activePage) {
      case "login":
        window.location.href = "/login";
        break;
      case "register":
        window.location.href = "/register";
        break;
      case "logout":
        API.logOut().then(res=>{
          setAuthState({
            loggedIn: false
          });
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
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
    <>
      <div className='container main'>
        <div className='row'>
          <Navbar>
            <img className='logo' src={logo} alt='logo'/>
            <HomeDrawer setActivePage={setActivePage} isMobile={isMobile} authState={authState}/>
            {isMobile ? (<div />) : (
              <div>
                {/* display routes if logged out */}
                {authState.loggedIn === false ? <a onClick={()=>{setActivePage("register")}}>Register</a> : <div/>}
                {authState.loggedIn === false ? <a onClick={()=>{setActivePage("login")}}>Login</a> : <div/>}
                {/* display routes if logged in */}
                {authState.loggedIn === true ? <a onClick={()=>{setActivePage("logout")}} >Logout</a> : <div/>}
                {authState.loggedIn === true && authState.userData.companyType === "charity" ? <a onClick={()=>{setActivePage("charity")}}>Charity Profile</a> : <></>} 
                {authState.loggedIn === true && authState.userData.companyType === "supplier" ? <a onClick={()=>{setActivePage("supplier")}}>Supplier Profile</a> : <></>} 
              </div>
            )}
          </Navbar>
        </div>
        <div className='main-text'>
          <h1 id='main-name'>leftōvers</h1>
        </div>
      </div>

      <div className='container home-page-data'>
        <div className='row'>
          <div className='main-info' id='main-info'>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="far fa-trash-alt fa-2x"></i></p>
              <p>In the United States alone, 40 percent of food gets tossed every year—and that amounts to $162 billion in waste annually, according to the Natural Resources Defense Council. This can serve 58,064,516,129 meals using the national average amount spent on a meal, $2.79.</p>
            </div>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="far fa-handshake fa-2x"></i></p>
              <p>Of the 318.9 million people in the United States, an estimated 49.1 million— or one in seven— were food insecure during 2014, according to the United States Department of Agriculture. Leftovers is violently committed to </p>
            </div>
            <div className='col span-1-of-3 box'>
              <p className='icon'><i className="fas fa-globe-americas fa-2x"></i></p>
              <p>Hella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshitHella moar words gucci belt lorem ipshit</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default Home;

