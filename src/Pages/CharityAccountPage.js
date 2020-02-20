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
import EditProfile from "../Components/EditProfile";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../style/images/green-earth.svg';
import '../style/css/useraccountpage.min.css';
import CharityDrawer from "../Components/CharityDrawer";

export default function CharityAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  });
  
  // Session data stored here 
  let sessionData = {};
  Check login status and redirect if not logged in
    useEffect(()=>{
      API.verifyLogin().then(res=>{
        if (res.data.email) {
          sessionData = res.data;
          console.log(sessionData);
        } else {
          history.push("/login");
        }  
      }).catch(err=>{
        alert(err)
        console.log(err);
          history.push("/login");
      })
  },[])

  const [activePage, setActivePage] = useState("Account Overview")

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

  function renderComponent(){
    if(activePage==="Account Overview"){
      return <AccountOverview />
    } else if(activePage==="Edit Profile"){
      return <EditProfile />
    } else if(activePage==="Find Suppliers"){
      return <FindingSupplier />
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
          <img onClick={goToHome}  className='logo' src={logo} alt='logo'></img>
          <CharityDrawer setActivePage={setActivePage}/>
        </Navbar>
        <div className='row'>
          <Section>
          {renderComponent()}
          </Section>
          <Aside>
            <h3>aslan</h3>
          </Aside>
        </div>
      </div>
    </div>
  )

}
