import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Register from './Register';
import Login from './Login';



export default function Home() {

  function renderRegister() {

  }

  function renderLogin() {

  }

  return (
    <div>
      <Header>
        <Navbar>
          <ul>
            <li onClick={renderRegister}><Register /></li>
            <li onClick={renderLogin}><Login /></li>
          </ul>
        </Navbar>
        <p>
          <h1>Title</h1>
        </p>
      </Header>
    </div>
  )

}
