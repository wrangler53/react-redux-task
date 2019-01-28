import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCandidates } from '../api';
import { setCandidates } from '../actions';

import Board from './Board';

class App extends Component {
  componentDidMount() {
    getCandidates()
      .then(candidates => {
        candidates.forEach(candidate => candidate.status = 1);
        this.props.setCandidates(candidates);
      });
  }

  render() {
    return (
      <Board />
    );
  }
}

const mapDispatchToProps = { setCandidates };

export default connect(null, mapDispatchToProps)(App);