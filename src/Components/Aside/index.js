import React from "react";

export default function Aside(props) {

  return (
    <aside className="aside span-2-of-5 col">
      <div className='col'>
        {props.children}
      </div>
    </aside>
  )
}