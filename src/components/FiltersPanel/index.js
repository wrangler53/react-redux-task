import React from 'react';

import CityFilter from '../Filters/CityFilter';
import NameFilter from '../Filters/NameFilter';

const FiltersPanel = () => (
  <div className="filters-panel">
    <NameFilter />
    <CityFilter />
  </div>
);

export default FiltersPanel;