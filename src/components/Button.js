import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, clickHanlder, type }) => (
  <button className={`btn ${type}`} onClick={clickHanlder}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  clickHanlder: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  title: 'Button',
  type: '',
  clickHanlder: () => {},
};

export default Button;
