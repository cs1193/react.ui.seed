/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  children?: any
};

export default class ErrorBoundary extends Component<Props, State> {
  static get defaultProps() {
    return {
      children: {},
    };
  }

  static get propTypes() {
    return {
      children: PropTypes.children,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-error">
          Something went wrong.
          {this.state.error && this.state.error.toString()}
          {this.state.info.componentStack}
        </div>
      );
    }
    return this.props.children;
  }
}
