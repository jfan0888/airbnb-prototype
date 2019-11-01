import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { ThemeButton } from '../../components';

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'sign',
    };
  }

  changeSortType = value => {
    this.setState({ sortType: value });
  };

  render() {
    const { sortType } = this.state;

    return (
      <div className="filter-settings themes">
        <div className="theme-category">
          <div className="header">
            <h3 className="label">Themes</h3>
            <div className="sort-wrapper">
              <span>Sorted by</span>
              <div className="buttons-wrapper">
                <div
                  className={`sort-type-button${
                    sortType === 'sign' ? ' active' : ''
                  }`}
                  onClick={() => this.changeSortType('sign')}
                >
                  Signifincance
                </div>
                <div
                  className={`sort-type-button${
                    sortType === 'sent' ? ' active' : ''
                  }`}
                  onClick={() => this.changeSortType('sent')}
                >
                  Sentiment
                </div>
              </div>
            </div>
          </div>
          <div className="content flex-1">
            <Scrollbars>
              <ThemeButton caption="Theme_Name" value="34%" />
              <ThemeButton active caption="Theme_Name" value="33%" />
              <ThemeButton caption="Theme_Name" value="32%" />
              <ThemeButton caption="Theme_Name" value="29%" />
              <ThemeButton active caption="Theme_Name" value="27%" />
              <ThemeButton caption="Theme_Name" value="25%" />
              <ThemeButton caption="Theme_Name" value="21%" />
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Themes;
