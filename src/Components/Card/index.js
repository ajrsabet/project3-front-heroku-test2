import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className='card'>
      <p>
        <img src={props.image} />
      </p>
      <p>
        {props.heading}
      </p>
      <p>
        {props.text}
      </p>
    </div>
  )
}