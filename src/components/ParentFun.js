
import React, { useState } from "react";
import ChildFun from "./ChildFun";
import SiblingFun from "./SiblingFun";
import '../styles.css';

export default function ParentFun() {
  const [name, setName] = useState('Jackson');

  const changeName = (newName) => {
    setName(newName);
  }


    return (
      <div>
	<p>*************************Functions*************************</p>
        <ChildFun onChange={changeName} />
        <SiblingFun name={name} />
	<p>*************************************************************</p>
      </div>
    );
}
