import React from 'react';

import { DataRange } from '../../components';

const Perception = props => (
  <div className="filter-settings perception">
    <DataRange caption="Total rating reverage" />
    <DataRange caption="Accuracy rating" />
    <DataRange caption="Check-in rating" />
    <DataRange caption="Cleanliness rating" />
    <DataRange caption="Communication rating" />
    <DataRange caption="Location rating" />
  </div>
);

export default Perception;
