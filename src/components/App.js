import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCandidates } from '../actions';

import FiltersPanel from './FiltersPanel';
import Board from './Board';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  componentDidMount() {
    this.props.fetchCandidates();
  }

  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <FiltersPanel />
        </ErrorBoundary>
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchCandidates };

export default connect(null, mapDispatchToProps)(App);