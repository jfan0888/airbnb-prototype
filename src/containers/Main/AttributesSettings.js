import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DataRange, Button } from '../../components';

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accomodationType: 'entire',
      houseRule: 'pet',
    };
  }

  setAccomodationType = value => {
    this.setState({ accomodationType: value });
  };

  setHouseRule = value => {
    this.setState({ houseRule: value });
  };

  render() {
    const { accomodationType, houseRule } = this.state;

    return (
      <Scrollbars>
        <div className="tab-content">
          <div className="filter-settings attributes">
            <div className="accomodation-types-wrapper">
              <h4 className="label">Accomodation type</h4>
              <div>
                <Button
                  title="Entire Home"
                  type={accomodationType === 'entire' ? 'secondary' : 'primary'}
                  clickHanlder={() => this.setAccomodationType('entire')}
                />
                <Button
                  title="Private Room"
                  type={
                    accomodationType === 'private' ? 'secondary' : 'primary'
                  }
                  clickHanlder={() => this.setAccomodationType('private')}
                />
              </div>
            </div>
            <DataRange
              caption="Per night price"
              mask="$"
              defaultValue={[0, 5]}
              max={5}
            />
            <DataRange caption="Days of stay" defaultValue={[0, 5]} max={5} />
            <DataRange caption="Total bedrooms" defaultValue={[0, 5]} max={5} />
            <div className="house-rules-wrapper">
              <h4 className="label">House Rules</h4>
              <div>
                <Button
                  title="Pet Friendly"
                  type={houseRule === 'pet' ? 'secondary' : 'primary'}
                  clickHanlder={() => this.setHouseRule('pet')}
                />
                <Button
                  title="Parties allowed"
                  type={houseRule === 'parties' ? 'secondary' : 'primary'}
                  clickHanlder={() => this.setHouseRule('parties')}
                />
              </div>
            </div>
            <DataRange
              caption="Successful books"
              defaultValue={[0, 99999]}
              max={99999}
            />
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Attributes;
