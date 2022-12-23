import React from 'react';


const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

const imgSize = {
	height: 100,
	width: 100
};

export class InjectedAttributes extends React.Component {
  render() {
    return (
      <>
      <h1>Injected Attributes</h1>
      <div>
        <h1>{owl.title}</h1>
        <img style={imgSize}
          src={owl.src}
          alt={owl.title} />
      </div>
      <p>********************************************************</p>
      </>
    );
  }
}
