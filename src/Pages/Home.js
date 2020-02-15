import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

export default function Home() {

  return (
    <div>
      <Header>
        <Navbar>

          <Link to='/register' >Register</Link>
          <Link to='/login'>Login</Link>

        </Navbar>
        <p>
          <h1>Title</h1>
        </p>
      </Header>
      <div className='main-info'>
        info hhit
      </div>
    </div>
  )

}
