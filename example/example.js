/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from '../source/App';

const EXAMPLE = document.getElementById('example');

const renderApp = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    EXAMPLE,
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(
    '../source/App',
    () => {
      /* eslint-disable global-require */
      const App = require('../source/App').default;
      renderApp(App);
    },
  );
}
