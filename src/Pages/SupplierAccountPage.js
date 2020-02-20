// NPM packages
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

export default function SupplierAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

<<<<<<< HEAD
  useEffect(()=>{
    console.log(history)
    API.verifyLogin().then(res=>{
        console.log("yay you can make animals!")
    }).catch(err=>{
        // history.goBack();
        //history.push("/login")
    })
},[])
=======
  // Session data stored here 
  let sessionData = {};
  // Check login status and redirect if not logged in
    useEffect(()=>{
      API.verifyLogin().then(res=>{
        if (res.data.email) {
          sessionData = res.data;
          console.log(sessionData);
        } else {
          history.push("/login");
        }  
      }).catch(err=>{
        console.log(err);
        alert(err);
          history.push("/login");
      })
  },[])
>>>>>>> 1a378823e513a01be0f1b18366085ed9bbc0dd13

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
    <div>
      <Header>
        <h1>Hi Daddy</h1>
      </Header>
      <Wrapper>
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
      </Wrapper>
    </div>
  )
}