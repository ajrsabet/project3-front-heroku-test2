import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';
import API from "../Util/API/API";
import { Redirect, useHistory } from "react-router-dom"
import FindingSupplier from '../Components/FindingSupplier';
import AccountOverview from "../Components/AccountOverview";
import EditProfile from "../Components/EditProfile/EditProfile";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/useraccountpage.min.css';

export default function CharityAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  useEffect(() => {
    API.verifyLogin().then(res => {
      console.log("You are logged in!")
    }).catch(err => {
      // history.push("/login")
    })
  }, [])

  useEffect(() => {
    accountOverview()
  }, []);

  function accountOverview(props) {
    setSectionState({
      sectionData:
        <AccountOverview />
    })
  }

  function editProfile() {
    setSectionState({
      sectionData:
        <EditProfile />
    })
  }

  function findSupplier() {
    setSectionState({
      sectionData:
        <div>
          <h1> Find Suppliers </h1>
          <FindingSupplier />
        </div>
    })
  }

  function viewInventory() {
    setSectionState({
      sectionData:
        <div>
          <h1> View Supplier Inventory </h1>
          {/* Of favorite suppliers? */}
        </div>
    })
  }

  function reviewSupplier() {
    setSectionState({
      sectionData:
        <div>
          <h1> Review Suppliers </h1>
        </div>
    })
  }

  return (
    <div className='main'>
      <div className='container row'>
        <Navbar>
          <img className='logo' src={logo} alt='logo'></img>
          <Link to='/login'>Login</Link>
          <Link id='register' to='/register'>Register</Link>
        </Navbar>
        <div className='row'>
          <Aside>
            <div className='left-aside'>
              <button className='btn-acct' onClick={accountOverview}>Account Overview</button>
              <button className='btn-acct' onClick={editProfile}>Edit Profile</button>
              <button className='btn-acct' onClick={findSupplier}>Find Suppliers</button>
              <button className='btn-acct' onClick={viewInventory}>View Supplier Inventory</button>
              <button className='btn-acct' onClick={reviewSupplier}>Review Suppliers</button>
            </div>

          </Aside>
          <Section>
            <div>{sectionState.sectionData}</div>
          </Section>
          <Aside>
            <h3>aslan</h3>
          </Aside>
        </div>
      </div>
    </div>
  )

}
