import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCandidates } from '../actions';

import FiltersPanel from './FiltersPanel';
import Board from './Board';

class App extends Component {
  componentDidMount() {
    this.props.fetchCandidates();
  }

  render() {
    return (
      <div className="container">
        <FiltersPanel />
        <Board />
      </div>
    );
  }
}

const mapDispatchToProps = { fetchCandidates };

export default connect(null, mapDispatchToProps)(App);