import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';

const ThemeButton = ({ caption, value, active }) => {
  return (
    <div className="theme-button d-flex align-items-center">
      <div className="caption">{caption}</div>
      <a className="move-to d-flex align-items-center">
        <span>{value}</span>
        <Toggle value={active} />
      </a>
    </div>
  );
};

ThemeButton.propTypes = {
  caption: PropTypes.string,
  value: PropTypes.string,
  active: PropTypes.bool,
};

ThemeButton.defaultProps = {
  caption: 'Theme_Button',
  value: '',
  active: false,
};

export default ThemeButton;
