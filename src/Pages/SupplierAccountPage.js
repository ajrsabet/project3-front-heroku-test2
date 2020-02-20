import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom"
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';
import API from "../Util/API/API";
import InventoryTable from "../Components/InventoryTable";
import AccountOverview from "../Components/AccountOverview";
import EditProfile from "../Components/EditProfile/EditProfile";
import PickupSchedule from "../Components/PickupSchedule/PickupSchedule";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/useraccountpage.min.css';

export default function SupplierAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  useEffect(() => {
    console.log(history)
    API.verifyLogin().then(res => {
      console.log("yay you can make animals!")
    }).catch(err => {
      // history.goBack();
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

  function setPickupSchedule() {
    setSectionState({
      sectionData:
        <PickupSchedule />
    })
  }

  function inventory(props) {
    setSectionState({
      sectionData:
        <div>
          <h1> Inventory </h1>
          <InventoryTable />
        </div>
    })
  }

  function reviewCharities() {
    setSectionState({
      sectionData:
        <div>
          <h1> Review Charities </h1>
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
            <button className='btn' onClick={accountOverview}>Account Overview</button>
            <button className='btn' onClick={editProfile}>Edit Profile</button>
            <button className='btn' onClick={setPickupSchedule}>Set Pickup Schedule</button>
            <button className='btn' onClick={inventory}>Inventory</button>
            <button className='btn' onClick={reviewCharities}>Review Charities</button>
          </Aside>
          <Section>
            <div>{sectionState.sectionData}</div>
          </Section>
        </div>
      </div>
    </div>
  )
}