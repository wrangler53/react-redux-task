import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCandidates } from '../actions';

import Board from './Board';

class App extends Component {
  componentDidMount() {
    this.props.fetchCandidates();
  }

  render() {
    return (
      <Board />
    );
  }
}

const mapDispatchToProps = { fetchCandidates };

export default connect(null, mapDispatchToProps)(App);