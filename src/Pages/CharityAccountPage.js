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
import AccountOverview from "../Components/AccountOverview";
import EditProfile from "../Components/EditProfile/EditProfile";

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
        if (res.data.email) {
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
