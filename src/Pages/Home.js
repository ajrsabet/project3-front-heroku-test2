import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

export default function Home() {
  // function renderHome() {

  // }

  return (
    <div>
      <Header>
        <Navbar>
          <ul>
            {/* <li onClick={renderHome}><Home/></li>
            <li onClick={renderAbout}><About/></li>
            <li onClick={renderRegister}><Create/></li>
            <li onClick={renderLogin}><Login/></li> */}
          </ul>
        </Navbar>
        <p>
          <h1>Title</h1>
        </p>
      </Header>
    </div>
  )

}
