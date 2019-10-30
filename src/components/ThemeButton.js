import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ThemeButton = ({ clickHanlder, caption, active }) => (
  <div
    className={`theme-button d-flex align-items-center${
      active ? ' active' : ' normal'
    }`}
    onClick={clickHanlder}
  >
    <div className="caption">{caption}</div>
    <a className="move-to">
      <FontAwesomeIcon icon={faChevronRight} />
    </a>
  </div>
);

ThemeButton.propTypes = {
  clickHanlder: PropTypes.func,
  type: PropTypes.string,
};

ThemeButton.defaultProps = {
  type: '',
  clickHanlder: () => {},
};

export default ThemeButton;
