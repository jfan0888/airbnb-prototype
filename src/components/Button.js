import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, clickHanlder }) => (
    <button onClick={clickHanlder}>{title}</button>
)

Button.propTypes = {
    title: PropTypes.string,
    clickHanlder: PropTypes.func
}

Button.defaultProps = {
    title: 'Button',
    clickHanlder: () => { }
}

export default Button;