import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchCandidates } from '../actions';

import FiltersPanel from './FiltersPanel';
import Board from './Board';
import ErrorBoundary from './ErrorBoundary';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchCandidates();
  }

  render() {
    return (
      <div className="container">
        {
          this.props.isLoading &&
          <FontAwesomeIcon icon={faSpinner} spin color="#666" size="4x" className="spinner" />
        }
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

const mapStateToProps = ({ candidatesReducer }) => ({
  isLoading: candidatesReducer.isLoading
});

App.propTypes = {
  fetchCandidates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(App);