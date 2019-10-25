import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const SidebarToggle = ({ clickHanlder, type }) => (
  <button className={`sidebar-toggle ${type}`} onClick={clickHanlder}>
    <FontAwesomeIcon icon={type === 'left' ? faTv : faSlidersH} />
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
