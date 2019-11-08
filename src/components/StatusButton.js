import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';

const StatusButton = ({ title, clickHanlder, status }) => (
  <button
    className={`d-flex justify-center status-btn ${status}`}
    onClick={clickHanlder}
    disabled={status === 'done'}
  >
    {status !== 'loading' ? title : <Loading size="small" />}
  </button>
);

StatusButton.propTypes = {
  title: PropTypes.string,
  clickHanlder: PropTypes.func,
  type: PropTypes.string,
};

StatusButton.defaultProps = {
  title: 'Button',
  type: '',
  clickHanlder: () => {},
};

export default StatusButton;
