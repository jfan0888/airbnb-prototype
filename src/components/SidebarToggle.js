import React from 'react';
import PropTypes from 'prop-types';

const displayIcon = require('../assets/icons/displays.svg');
const filtersIcon = require('../assets/icons/filters.svg');

const SidebarToggle = ({ clickHanlder, type }) => (
  <button className={`sidebar-toggle ${type}`} onClick={clickHanlder}>
    <img src={type === 'left' ? displayIcon : filtersIcon} />
  </button>
);

SidebarToggle.propTypes = {
  clickHanlder: PropTypes.func,
  type: PropTypes.string,
};

SidebarToggle.defaultProps = {
  type: '',
  clickHanlder: () => {},
};

export default SidebarToggle;
