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

  componentDidMount() {
    this.resetSettings(this.props);
  }

  resetSettings = props => {
    const { settings } = props;
    const { accomodationTypes, houseRules } = settings;

    if (settings && accomodationTypes && houseRules) {
      this.setState({
        accomodationTypes: accomodationTypes.value,
        houseRules: houseRules.value,
      });
    }
  };

  setAccomodationType = value => {
    const { accomodationTypes } = this.state;

    let newAccomodationTypes = accomodationTypes;

    if (newAccomodationTypes.includes(value)) {
      newAccomodationTypes.splice(newAccomodationTypes.indexOf(value), 1);
    } else {
      newAccomodationTypes.push(value);
    }

    this.setState({ accomodationTypes: newAccomodationTypes });
    this.props.setAttributes('accomodationTypes', newAccomodationTypes);
  };

  setHouseRule = value => {
    const { houseRules } = this.state;

    let newHouseRules = houseRules;

    if (newHouseRules.includes(value)) {
      newHouseRules.splice(newHouseRules.indexOf(value), 1);
    } else {
      newHouseRules.push(value);
    }

    this.setState({ houseRules: newHouseRules });
    this.props.setAttributes('houseRules', newHouseRules);
  };

  render() {
    const { accomodationTypes, houseRules } = this.state;
    const { settings } = this.props;

    const {
      perNightPrice,
      daysOfStay,
      totalBedrooms,
      successfulBooks,
    } = settings;

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
              defaultValue={perNightPrice.value}
              max={10000}
              updateHandler={value =>
                this.props.setAttributes('perNightPrice', value)
              }
            />
            <DataRange
              caption="Days of stay"
              defaultValue={daysOfStay.value}
              max={30}
              updateHandler={value =>
                this.props.setAttributes('daysOfStay', value)
              }
            />
            <DataRange
              caption="Total bedrooms"
              defaultValue={totalBedrooms.value}
              max={10}
              updateHandler={value =>
                this.props.setAttributes('totalBedrooms', value)
              }
            />
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
              defaultValue={successfulBooks.value}
              max={99999}
              updateHandler={value =>
                this.props.setAttributes('successfulBooks', value)
              }
            />
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Attributes;
