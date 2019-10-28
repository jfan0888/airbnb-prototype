import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, Slider } from '../../components';

const LeftSidebarContent = props => (
  <div className="sidebar-content left">
    <div className="main">
      <h4 className="title">Display</h4>
      <div className="filter-item">
        <label className="label">Display Type</label>
        <Dropdown />
      </div>
      <div className="filter-item">
        <label className="label">X-axis</label>
        <Dropdown />
      </div>
      <div className="filter-item">
        <label className="label">Y-axis</label>
        <Dropdown />
      </div>
      <div className="filter-item">
        <label className="label">Node size</label>
        <Slider single />
        <div className="data-range">
          <div className="value-box number">3</div>
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
