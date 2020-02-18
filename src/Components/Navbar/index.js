import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    )
};