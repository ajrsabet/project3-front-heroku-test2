import React from "react";
import './header.css';

export default function Header(props) {
    return (
        <header className="header">
            {props.children}
        </header>
    )
};

