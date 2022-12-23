
import React from "react";
import '../styles.css';


export default function ChildFun(props) {

  const handleChange = (e) => {
    const name = e.target.value;
    props.onChange(name);
  }

    return (
      <div>
        <select id="great-names" onChange={handleChange}>
          <option value="Jackson">Jackson</option>
          <option value="Adams">Adams</option>
          <option value="Jefferson">Jefferson</option>
        </select>
      </div>
    );
}

