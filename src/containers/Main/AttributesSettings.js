import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DataRange, Button } from '../../components';

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accomodationTypes: ['entire'],
      houseRules: ['pet'],
    };
  }

  setAccomodationType = value => {
    this.setState(prevState => {
      let newAccomodationTypes = prevState.accomodationTypes;

      if (newAccomodationTypes.includes(value)) {
        newAccomodationTypes.splice(newAccomodationTypes.indexOf(value), 1);
      } else {
        newAccomodationTypes.push(value);
      }

      return { accomodationTypes: newAccomodationTypes };
    });
  };

  setHouseRule = value => {
    this.setState(prevState => {
      let newHouseRules = prevState.houseRules;

      if (newHouseRules.includes(value)) {
        newHouseRules.splice(newHouseRules.indexOf(value), 1);
      } else {
        newHouseRules.push(value);
      }

      return { houseRules: newHouseRules };
    });
  };

  render() {
    const { accomodationTypes, houseRules } = this.state;

    return (
      <Scrollbars>
        <div className="tab-content">
          <div className="filter-settings attributes">
            <div className="accomodation-types-wrapper">
              <h4 className="label">Accomodation type</h4>
              <div>
                <Button
                  title="Entire Home"
                  type={
                    accomodationTypes.includes('entire')
                      ? 'secondary'
                      : 'primary'
                  }
                  clickHanlder={() => this.setAccomodationType('entire')}
                />
                <Button
                  title="Private Room"
                  type={
                    accomodationTypes.includes('private')
                      ? 'secondary'
                      : 'primary'
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
                  type={houseRules.includes('pet') ? 'secondary' : 'primary'}
                  clickHanlder={() => this.setHouseRule('pet')}
                />
                <Button
                  title="Parties allowed"
                  type={
                    houseRules.includes('parties') ? 'secondary' : 'primary'
                  }
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
