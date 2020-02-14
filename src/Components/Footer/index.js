import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className='footer'>
      {props.children}
    </footer>
  )
}