import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';

export default function CharityAccountPage() {

  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  useEffect(() => {
    accountOverview()
  }, []);


  function accountOverview() {
    setSectionState({
      sectionData:
        <div>
          <h1>Account Overview</h1>
          <h2>stuff stuff</h2>
        </div>

    })
  }

  function editProfile() {
    setSectionState({
      sectionData:
        <div>
          <h1> Edit Profile </h1>
          <p>Company Name</p>
          <input placeholder="API data here"></input>
          <p>Admin Name</p>
          <input placeholder="API data here"></input>
          <p>Street Address</p>
          <input placeholder="API data here"></input>
          <p>City</p>
          <input placeholder="API data here"></input>
          <p>State</p>
          <input placeholder="API data here"></input>
          <p>Zipcode</p>
          <input placeholder="API data here"></input>
          <p>EIN</p>
          <input placeholder="API data here"></input>
          <input placeholder="API data here"></input>
          <p>Email</p>
          <input placeholder="API data here"></input>
          <p>Password</p>
          <input placeholder="API data here"></input>
        </div>
    })
  }

  function changePassword() {
    setSectionState({
      sectionData:
        <div>
          <h1> Change Password </h1>
        </div>
    })
  }

  return (

    <Wrapper>
      <Header>
        <h1>Hey Header</h1>
      </Header>
      <Aside>
        <button className='btn' onClick={accountOverview}>Account Overview</button>
        <button className='btn' onClick={editProfile}>Edit Profile</button>
        <button className='btn' onClick={changePassword}>Change Password</button>
      </Aside>
      <Section>
        <div>{sectionState.sectionData}</div>
      </Section>
    </Wrapper>


  )
}
