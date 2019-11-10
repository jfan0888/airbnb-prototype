import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';

const ThemeButton = ({ caption, value, active }) => (
  <div className="theme-button d-flex align-items-center">
    <div className="caption">{caption}</div>
    <a className="move-to d-flex align-items-center">
      <span>{value}</span>
      <Toggle value={active} />
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
