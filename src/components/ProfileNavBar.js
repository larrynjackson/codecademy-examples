import React from 'react';
import { NavBar } from './NavBar.js';
import '../styles.css';


const imgSize = {
	height: 100,
	width: 100
};

export class ProfileNavBar extends React.Component {
  render() {
    return (
      <div>
	<h1>Profile Example With a Nav Bar</h1>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img style={imgSize}
	     alt="myImage"
	     src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      <p>****************************************************************</p>
      </div>
    );
  }
}
