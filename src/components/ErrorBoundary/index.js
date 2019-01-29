import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2 className="error__text">Uuuups, something went wrong</h2>
          <h2 className="error__text">Please, try again later</h2>
          <h3 className="error__text">Error: {this.state.error.toString()}</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;