// NPM packages
import React, { useState, useEffect } from "react";
import {Redirect,useHistory} from "react-router-dom"
// Components
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';
import API from "../Util/API/API";
import FindingSupplier from '../Components/FindingSupplier';

export default function CharityAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  });
  
  // Session data stored here 
  let sessionData = {};
  // Check login status and redirect if not logged in
    useEffect(()=>{
      API.verifyLogin().then(res=>{
        if (res.data.username) {
          sessionData = res.data;
          console.log(sessionData);
        } else {
          history.push("/login");
        }  
      }).catch(err=>{
        console.log(err);
          history.push("/login");
      })
  },[])

  useEffect(() => {
    accountOverview();
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
          <input type='number' placeholder="API data here"></input>
          <p>EIN</p>
          <input placeholder="API data here"></input>
          <p>Email</p>
          <input placeholder="API data here"></input>
          <p>Password</p>
          <input placeholder="API data here"></input>
          {/* Add confirm password? Also add API calls to change this info in DB */}
        </div>
    })
  }

  function findSupplier() {
    setSectionState({
      sectionData:
        <div>
          <h1> Find Suppliers </h1>
          <FindingSupplier/>
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
    <div>
      <Header>
        <h1>Hi Daddy</h1>
      </Header>
      <Wrapper>
        <Aside>
          <button className='btn' onClick={accountOverview}>Account Overview</button>
          <button className='btn' onClick={editProfile}>Edit Profile</button>
          <button className='btn' onClick={findSupplier}>Find Suppliers</button>
          <button className='btn' onClick={viewInventory}>View Supplier Inventory</button>
          <button className='btn' onClick={reviewSupplier}>Review Suppliers</button>
        </Aside>
        <Section>
          <div>{sectionState.sectionData}</div>
        </Section>
      </Wrapper>
    </div>
  )

}
