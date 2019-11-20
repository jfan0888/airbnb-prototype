import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DataRange } from '../../components';

const Perception = ({ settings, setPerception }) => (
  <Scrollbars>
    <div className="tab-content">
      <div className="filter-settings perception">
        <DataRange
          caption="Total rating reverage"
          defaultValue={settings.totalRatingReverage.value}
          updateHandler={value => setPerception('totalRatingReverage', value)}
        />
        <DataRange
          caption="Accuracy rating"
          defaultValue={settings.accuracyRating.value}
          updateHandler={value => setPerception('accuracyRating', value)}
        />
        <DataRange
          caption="Check-in rating"
          defaultValue={settings.checkingInRating.value}
          updateHandler={value => setPerception('checkingInRating', value)}
        />
        <DataRange
          caption="Cleanliness rating"
          defaultValue={settings.cleanlinessRating.value}
          updateHandler={value => setPerception('cleanlinessRating', value)}
        />
        <DataRange
          caption="Communication rating"
          defaultValue={settings.communicationRating.value}
          updateHandler={value => setPerception('communicationRating', value)}
        />
        <DataRange
          caption="Location rating"
          defaultValue={settings.locationRating.value}
          updateHandler={value => setPerception('locationRating', value)}
        />
      </div>
    </div>
  </Scrollbars>
);

export default Perception;
