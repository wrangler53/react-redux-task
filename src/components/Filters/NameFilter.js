import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { searchByName } from '../../actions';

import './_Filter.scss';

class NameFilter extends PureComponent {
  state = {
    enteredName: ''
  }

  handleInput = ({ target }) => {
    this.setState({ enteredName: target.value });
  }

  handleEnterPress = ({ keyCode, which }) => {
    if (keyCode || which === 13) this.submitSearch();
  }

  submitSearch = () => {
    const { enteredName } = this.state;

    (enteredName.length === 0) ?
      this.props.searchByName(null) :
      this.props.searchByName(enteredName);

    this.setState({ enteredName: '' });
  }

  render() {
    return (
      <div className="filters-item">
        <input
          type="text"
          className="filters-item__input"
          placeholder="Enter candidate`s name"
          value={this.state.enteredName}
          onChange={event => this.handleInput(event)}
          onKeyPress={event => this.handleEnterPress(event)}
        />
        <button
          type="text"
          className="filters-item__button"
          onClick={this.submitSearch}
        >Search By Candidate`s name</button>
      </div>
    );
  }
}

const mapDispatchToProps = { searchByName };

NameFilter.propTypes = {
  searchByName: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(NameFilter);