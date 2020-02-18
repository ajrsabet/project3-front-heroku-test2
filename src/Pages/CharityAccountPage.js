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
                    {/* Add confirm password? Also add API calls to change this info in DB */}
                </div>
        })
    }

    function findSupplier() {
        setSectionState({
            sectionData:
                <div>
                    <h1> Find Suppliers </h1>
                    {/* Add functionality to "favorite" suppliers */}
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
            <Header />
            <Aside>
                <button onClick={accountOverview}>Account Overview</button>
                <button onClick={editProfile}>Edit Profile</button>
                <button onClick={findSupplier}>Find Suppliers</button>
                <button onClick={viewInventory}>View Supplier Inventory</button>
                <button onClick={reviewSupplier}>Review Suppliers</button>
            </Aside>
            <Section>
                <div>{sectionState.sectionData}</div>
            </Section>
        </div>
      )

}
