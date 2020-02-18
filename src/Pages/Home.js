import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';

export default function Home() {

  return (
    <div >
      <div className='container main-home'>
        <Navbar>
          <div className='row'>
            <img className='main-logo' src={logo} alt='logo'></img>
            <Link to='/login'>Login</Link>
            <Link to='/register' >Register</Link>
          </div>
        </Navbar>
        <div className='main-home-text'>
          <h1>Some fancy shit to say about food and planet yea</h1>
          <a href='#main-info'>Learn more</a>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='main-info' id='main-info'>
            <div className='col span-1-of-3'>
              {/* icon and paragraph shit */}
            </div>
            <div className='col span-1-of-3'>
              {/* icon and paragraph shit */}
            </div>
            <div className='col span-1-of-3'>
              {/* icon and paragraph shit */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}



