import React, { useState, useEffect } from "react";
import {Redirect,useHistory} from "react-router-dom"
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";
import Wrapper from '../Components/Wrapper';
import API from "../Util/API/API";
import InventoryTable from "../Components/InventoryTable";

export default function SupplierAccountPage() {
  const history = useHistory();
  const [sectionState, setSectionState] = useState({
    sectionData: ''
  })

  useEffect(()=>{
    console.log(history)
    API.verifyLogin().then(res=>{
        console.log("yay you can make animals!")
    }).catch(err=>{
        // history.goBack();
        // history.push("/login")
    })
},[])

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
                                <td>API data here</td>
                                {/* <td>{props.company}</td> */}
                                {/* correct props call? */}
                            </tr>
                            <tr>
                                <td>Admin Name</td>
                                <td>API data here</td>
                                {/* <td>{props.admin}</td> */}
                            </tr>
                            <tr>
                                <td>Street Address</td>
                                <td>API data here</td>
                                {/* <td>{props.street}</td> */}
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>API data here</td>
                                {/* <td>{props.city}</td> */}
                            </tr>
                            <tr>
                                <td>Zipcode</td>
                                <td>API data here</td>
                                {/* <td>{props.zipcode}</td> */}
                            </tr>
                            <tr>
                                <td>EIN</td>
                                <td>API data here</td>
                                {/* <td>{props.ein}</td> */}
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>API data here</td>
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
                    <input placeholder=""></input>
                    <p>Admin Name</p>
                    <input placeholder=""></input>
                    <p>Street Address</p>
                    <input placeholder=""></input>
                    <p>City</p>
                    <input placeholder=""></input>
                    <p>State</p>
                    <input type='number' placeholder=""></input>
                    <p>Zipcode</p>
                    <input type='number' placeholder=""></input>
                    <p>EIN</p>
                    <input type='number' placeholder=""></input>
                    <p>Email</p>
                    <input placeholder=""></input>
                    <p>Password</p>
                    <input placeholder=""></input>
                    {/* Add confirm password? Also add API calls to change this info in DB */}
                </div>
        })
    }

    function setPickupSchedule() {
        setSectionState({
            sectionData:
                <div>
                    <h1> Set Pickup Schedule </h1>
                    <form>
                        <label for="pickupDate">Pickup Date:</label>
                        <input type="date" id="pickupDate" name="pickupDate" />
                        <br/>
                        <label for="pickupDate">Pickup Time:</label>
                        <input type="time" id="pickupTime" name="pickupTime" />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
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