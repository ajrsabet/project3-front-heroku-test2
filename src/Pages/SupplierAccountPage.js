import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';

export default function SupplierAccountPage() {

  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  useEffect(() => {
    accountOverview()
  }, []);

  function accountOverview(props) {
    setSectionState({
      sectionData:
        <div>
          <h1>Account Overview</h1>
          <h2>Profile</h2>
          <table>
            <tbody>
              <tr>
                <td>Company Name</td>
                {/* <td>{props.company}</td> */}
                {/* correct props call? */}
              </tr>
              <tr>
                <td>Admin Name</td>
                {/* <td>{props.admin}</td> */}
              </tr>
              <tr>
                <td>Street Address</td>
                {/* <td>{props.street}</td> */}
              </tr>
              <tr>
                <td>City</td>
                {/* <td>{props.city}</td> */}
              </tr>
              <tr>
                <td>Zipcode</td>
                {/* <td>{props.zipcode}</td> */}
              </tr>
              <tr>
                <td>EIN</td>
                {/* <td>{props.ein}</td> */}
              </tr>
              <tr>
                <td>Email</td>
                {/* <td>{props.email}</td> */}
              </tr>
            </tbody>
          </table>
          <br />
          <button onClick={editProfile}>Edit Profile</button>

        </div>
    })
  }

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
          <input type='number' placeholder="API data here"></input>
          <p>Zipcode</p>
          <input type='number' placeholder="API data here"></input>
          <p>EIN</p>
          <input type='number' placeholder="API data here"></input>
          <p>Email</p>
          <input placeholder="API data here"></input>
          <p>Password</p>
          <input placeholder="API data here"></input>
          {/* Add confirm password? Also add API calls to change this info in DB */}
        </div>
    })
  }

  function setPickupSchedule() {
    setSectionState({
      sectionData:
        <div>
          <h1> Set Pickup Schedule </h1>
        </div>
    })
  }

  function updateInventory(props) {
    setSectionState({
      sectionData:
        <div>
          <h1> Update Inventory </h1>
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
          <button className='btn' onClick={updateInventory}>Update Inventory</button>
          <button className='btn' onClick={reviewCharities}>Review Charities</button>
        </Aside>
        <Section>
          <div>{sectionState.sectionData}</div>
        </Section>
      </Wrapper>
    </div>
  )
}