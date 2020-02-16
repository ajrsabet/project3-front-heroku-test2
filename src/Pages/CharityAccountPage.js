import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Section from "../Components/Section";

export default function CharityAccountPage() {

    const [sectionState, setSectionState] = useState({
        sectionData: ''
    })

    useEffect(() => {
        setSectionState({
            sectionData:
                <div>
                    <h1>Account Overview</h1>
                    <h2>stuff stuff</h2>
                </div>
        })
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
        <div>
            <Header />
            <Aside>
                <button onClick={accountOverview}>Account Overview</button>
                <button onClick={editProfile}>Edit Profile</button>
                <button onClick={changePassword}>Change Password</button>
            </Aside>
            <Section>
                <div>{sectionState.sectionData}</div>
            </Section>
        </div>
    )
}