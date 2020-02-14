import React from "react";
import "./footer.css";

export default function Footer(props) {
  return (
    <footer className='footer'>
      {props.children}
    </footer>
  )
}