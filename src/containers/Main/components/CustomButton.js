import React from 'react';

const CustomButton = props => (
  <div
    className={`sort-type-button${props.customClassName}`}
    onClick={props.clickHandler}
  >
    {props.caption}
  </div>
);

export default CustomButton;
