/* @flow */

import React, { Component } from 'react';

import ErrorBoundary from './common/ErrorBoundary';

import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.text = 'Main Application - React UI Seed';
  }

  render() {
    return (
      <ErrorBoundary>
        <div className='app'>
          {this.text}
        </div>
      </ErrorBoundary>
    );
  }
}
