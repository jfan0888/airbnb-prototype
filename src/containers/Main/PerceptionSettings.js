import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DataRange } from '../../components';

const Perception = props => (
  <Scrollbars>
    <div className="tab-content">
      <div className="filter-settings perception">
        <DataRange caption="Total rating reverage" />
        <DataRange caption="Accuracy rating" />
        <DataRange caption="Check-in rating" />
        <DataRange caption="Cleanliness rating" />
        <DataRange caption="Communication rating" />
        <DataRange caption="Location rating" />
      </div>
    </div>
  </Scrollbars>
);

export default Perception;
