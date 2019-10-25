import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Dot } from 'react-animated-dots';

const Loading = ({ size, position }) => (
  <div className={`loading-component ${size} ${position}`}>
    <Dot className="dot-item">
      <FontAwesomeIcon icon={faCircle} />
    </Dot>
    <Dot className="dot-item">
      <FontAwesomeIcon icon={faCircle} />
    </Dot>
    <Dot className="dot-item">
      <FontAwesomeIcon icon={faCircle} />
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
