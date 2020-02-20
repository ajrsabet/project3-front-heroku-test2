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
import EditProfile from "../Components/EditProfile";
import PickupSchedule from "../Components/PickupSchedule";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/useraccountpage.min.css';
import SupplierDrawer from "../Components/SupplierDrawer"

export default function SupplierAccountPage() {
  const history = useHistory();

  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  const [activePage, setActivePage] = useState("Account Overview")

  // Session data stored here 
  let sessionData = {};
  // Check login status and redirect if not logged in
  //   useEffect(()=>{
  //     API.verifyLogin().then(res=>{
  //       if (res.data.email) {
  //         sessionData = res.data;
  //         console.log(sessionData);
  //       } else {
  //         history.push("/login");
  //       }  
  //     }).catch(err=>{
  //       console.log(err);
  //       alert(err);
  //         history.push("/login");
  //     })
  // },[])

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

  function renderComponent() {
    if (activePage === "Account Overview") {
      return <AccountOverview />
    } else if (activePage === "Edit Profile") {
      return <EditProfile />
    } else if (activePage === "Set Pickup Schedule") {
      return <PickupSchedule />
    } else if (activePage === "Inventory") {
      return <InventoryTable />
    }
  }

  function goToHome(event){
    event.preventDefault();
    window.location.href = "/"
  }

  return (
    <div className='main'>
      <div className='container row'>
        <Navbar>
          <img onClick={goToHome} className='logo' src={logo} alt='logo'></img>
          <SupplierDrawer setActivePage={setActivePage} />
  
        </Navbar>
        <div className='row'>

          <Section>
            {renderComponent()}
          </Section>
        </div>
      </div>
    </div>
  )
}