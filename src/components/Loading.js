import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import { Dot } from 'react-animated-dots';

const Loading = ({ size, position }) => (
  <div className={`loading-component ${size} ${position}`}>
    <Dot className="dot-item">
      <FontAwesome name="circle" />
    </Dot>
    <Dot className="dot-item">
      <FontAwesome name="circle" />
    </Dot>
    <Dot className="dot-item">
      <FontAwesome name="circle" />
    </Dot>
  </div>
);

Loading.propTypes = {
  size: PropTypes.string,
  position: PropTypes.string,
};

Loading.defaultProps = {
  size: '',
  position: '',
};

export default Loading;
