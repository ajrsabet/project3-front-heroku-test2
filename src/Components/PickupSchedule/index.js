import React from "react";

export default function PickupSchedule(props) {
  return (
    <div>
      <h1> Set Pickup Schedule </h1>
      <form>
        <label for="pickupDate">Pickup Date:</label>
        <input type="date" id="pickupDate" name="pickupDate" />
        <br />
        <label for="pickupDate">Pickup Time:</label>
        <input type="time" id="pickupTime" name="pickupTime" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}