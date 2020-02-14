import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    )
};