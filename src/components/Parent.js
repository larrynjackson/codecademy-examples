
import React from "react";
import { Child } from "./Child";
import { Sibling } from "./Sibling";
import '../styles.css';

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Goldman" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return (
      <div>
	<p>************************Class Components**********************</p>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
	<p>*************************************************************</p>
      </div>
    );
  }
}
