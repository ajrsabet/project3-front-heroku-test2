import React from "react";

export default function Section(props) {
    return (
        <section className="Section span-4-of-5">
            {props.children}
        </section>
    )
};