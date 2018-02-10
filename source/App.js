import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.text = 'Main App';
  }
  render() {
    return (
      <div className='app'>
        {this.text}
      </div>
    );
  }
}
