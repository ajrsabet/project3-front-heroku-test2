import React from "react";
import "./aside.css";

export default function Aside(props) {
  return (
    <aside className='aside'>
      {props.children}
    </aside>

  )
}