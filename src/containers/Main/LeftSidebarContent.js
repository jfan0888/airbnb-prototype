import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, Slider } from '../../components';

const LeftSidebarContent = props => (
  <div className="sidebar-content left">
    <div className="main">
      <h4 className="title">Display</h4>
      <div className="filter-item">
        <h4 className="label">Display Type</h4>
        <Dropdown />
      </div>
      <div className="filter-item">
        <h4 className="label">X-axis</h4>
        <Dropdown />
      </div>
      <div className="filter-item">
        <h4 className="label">Y-axis</h4>
        <Dropdown />
      </div>
      <div className="filter-item">
        <h4 className="label">Node size</h4>
        <Slider
          single
          defaultValue={props.nodeSize}
          updateHandler={props.handleChangeNodeSize}
        />
        <div className="data-range">
          <div className="value-box number">{props.nodeSize}</div>
        </div>
      </div>
    </div>
    <div className="close-button-wrapper">
      <a className="button" onClick={props.closeHandler}>
        <FontAwesomeIcon icon={faTimes} />
      </a>
    </div>
  </div>
);

export default LeftSidebarContent;
