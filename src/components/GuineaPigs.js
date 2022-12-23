import React from "react";
import '../styles.css';



export class GuineaPigs extends React.Component {

  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img 
	    alt='pigs'
	    src={src} />
	<p>*************************************************</p>
      </div>
    );
  }
}
