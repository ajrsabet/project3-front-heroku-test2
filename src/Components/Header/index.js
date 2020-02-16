import React from "react";
import './Header.css';

export default function Header(props) {
    return (
        <header className="header">
            {props.children}
        </header>
    )
};

