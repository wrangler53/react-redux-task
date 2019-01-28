import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCandidates } from '../api';
import { setCandidates } from '../actions';

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
      <div>Hello World</div>
    );
  }
}

const mapDispatchToProps = { setCandidates };

export default connect(null, mapDispatchToProps)(App);