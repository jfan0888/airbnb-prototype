import React from 'react';

import { DataRange } from '../../components';

const Attributes = props => (
  <div className="filter-settings attributes">
    <DataRange caption="Total rating reverage" />
    <DataRange caption="Accuracy rating" />
    <DataRange caption="Check-in rating" />
    <DataRange caption="Cleanliness rating" />
    <DataRange caption="Communication rating" />
    <DataRange caption="Location rating" />
  </div>
);

export default Attributes;
