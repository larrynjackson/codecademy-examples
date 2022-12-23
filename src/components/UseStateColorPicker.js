import React, { useState } from "react";
import '../styles.css';

function UseStateColorPicker() {
  const [color, setColor] = useState("purple");

  const divStyle = { backgroundColor: color };

  return (
    <>
    <h1>Color Pick Buttons</h1>
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
      <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
      <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
      <button onClick={() => setColor("CornflowerBlue")}>CornflowerBlue</button>
    </div>
    <p>**************************************************************</p>
    </>
  );
}
export default UseStateColorPicker;

