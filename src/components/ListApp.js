import React from 'react';
import { List } from './List';

export class ListApp extends React.Component {
  render() {
    return (
      <div>
	<h1>Musician Lists Example Passing Child Attributes</h1>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Fat Jack the Hip Cat</li>
          <li>Stink Paw Jammer Cat</li>
        </List>
	<List type='Country Musician'>
	  <li>Brad Paisly</li>
	</List>
	<p>*****************************************************</p>
      </div>
    );
  }
}

