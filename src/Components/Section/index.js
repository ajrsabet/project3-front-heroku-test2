import React from "react";
import "./Section.css";

export default function Section(props) {
    return (
        <section className="section">
            {props.children}
        </section>
    )
};