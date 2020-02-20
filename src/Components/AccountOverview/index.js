import React from "react";
import '../../style/css/useraccountpage.min.css';

export default function AccountOverview(props) {
  return (
    <div>
      <h1>Account Overview</h1>
      {/* <h2>Profile</h2> */}
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
  )
}