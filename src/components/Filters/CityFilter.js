import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { searchByCity } from '../../actions';

import './_Filter.scss';

class CityFilter extends PureComponent {
  state = {
    enteredCity: ''
  }

  handleInput = ({ target }) => {
    this.setState({ enteredCity: target.value });
  }

  submitSearch = () => {
    const { enteredCity } = this.state;

    (enteredCity.length === 0) ?
      this.props.searchByCity(null) :
      this.props.searchByCity(enteredCity);

    this.setState({ enteredCity: '' });
  }

  render() {
    return (
      <div className="filters-item">
        <input
          type="text"
          className="filters-item__input"
          placeholder="Enter city"
          value={this.state.enteredCity}
          onChange={event => this.handleInput(event)}
        />
        <button
          type="text"
          className="filters-item__button"
          onClick={this.submitSearch}
        >Search By City</button>
      </div>
    );
  }
};

const mapDispatchToProps = { searchByCity };

CityFilter.propTypes = {
  searchByCity: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(CityFilter);