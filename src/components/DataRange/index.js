import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import Slider from '../Slider';

class DataRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: null,
      endValue: null,
    };
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    this.setState({ startValue: defaultValue[0], endValue: defaultValue[1] });
  }

  updateHandler = value => {
    this.setState({ startValue: value[0], endValue: value[1] });
  };

  render() {
    const { caption, mask, defaultValue, ...otherProps } = this.props;
    const { startValue, endValue } = this.state;

    return (
      <div className="filter-item">
        <h4 className="label">{caption}</h4>
        <Slider
          {...otherProps}
          defaultValue={defaultValue}
          updateHandler={this.updateHandler}
        />
        <div className="data-range">
          <div className="value-box number">
            {mask ? <span className="mask-text">{mask}</span> : null}
            {startValue}
          </div>
          <span className="range-sign">
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <div className="value-box number">
            {mask ? <span className="mask-text">{mask}</span> : null}
            {endValue}
          </div>
        </div>
      </div>
    );
  }
}

DataRange.propTypes = {
  caption: PropTypes.string,
  defaultValue: PropTypes.array,
  startValue: PropTypes.number,
  endValue: PropTypes.number,
};

DataRange.defaultProps = {
  caption: 'Data Range',
  defaultValue: [30, 100],
  startValue: 0,
  endValue: 100,
};

export default DataRange;
