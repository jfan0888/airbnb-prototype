import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';

const ThemeButton = ({ caption, value, active }) => (
  <div className="theme-button d-flex align-items-center">
    <div className="caption">
      {caption}
      <span>{value}</span>
    </div>
    <a className="move-to">
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
