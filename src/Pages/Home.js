import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

export default function Home() {

  return (
    <div className='container'>
      <Header>
        <Navbar>

          <Link to='/register' >Register</Link>
          <Link to='/login'>Login</Link>

        </Navbar>
          <h1>Title</h1>
      </Header>
      <div className='main-info'>
        info hhit
      </div>
    </div>
  )

}



