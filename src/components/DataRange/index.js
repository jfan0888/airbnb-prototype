import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import Slider from '../Slider';

const DataRange = ({ caption, defaultValue, startValue, endValue }) => (
  <div className="filter-item">
    <label className="label">{caption}</label>
    <Slider defaultValue={defaultValue} />
    <div className="data-range">
      <div className="value-box number">{startValue}</div>
      <span className="range-sign">
        <FontAwesomeIcon icon={faMinus} />
      </span>
      <div className="value-box number">{endValue}</div>
    </div>
  </div>
);

DataRange.propTypes = {
  caption: PropTypes.string,
  defaultValue: PropTypes.array,
  startValue: PropTypes.number,
  endValue: PropTypes.number,
};

DataRange.defaultProps = {
  caption: 'Data Range',
  defaultValue: [30, 100],
  startValue: 0,
  endValue: 100,
};

export default DataRange;
