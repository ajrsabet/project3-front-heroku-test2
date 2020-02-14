import React, { useState } from "react";
import "./Aside.css";

export default function Aside(props) {

  // const [optionState, setOptionState] = useState({
  //   accountOverview: `Account Overview`,
  //   editProfile: `Edit Profile`,
  //   changePassword: `Change Password`,
  // })

  return (
    <aside className="aside">
     {props.children}
    </aside>
  )
}