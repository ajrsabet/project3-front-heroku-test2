import React from "react";
import "./navbar.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    )
};