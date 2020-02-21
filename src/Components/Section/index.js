import React from "react";

export default function Section(props) {
    return (
        <section className="Section span-2-of-3">
            {props.children}
        </section>
    )
};