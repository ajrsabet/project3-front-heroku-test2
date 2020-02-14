import React from "react";
import "./section.css";

export default function Section(props) {
    return (
        <section className="section">
            {props.children}
        </section>
    )
};