import React, { useState } from "react";
import "./aside.css";

export default function Aside() {

  const [optionState, setOptionState] = useState({
    accountOverview: `Account Overview`,
    editProfile: `Edit Profile`,
    changePassword: `Change Password`,
  })

  return (
    <aside>
      <p>{optionState.accountOverview}</p>
      <p>{optionState.editProfile}</p>
      <p>{optionState.changePassword}</p>
    </aside>
  )
}