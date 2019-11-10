import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { ThemeButton } from '../../components';
import { SortTypeButton } from './components';

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentary: 'private',
      sortType: 'sent',
    };
  }

  changeSortType = value => {
    this.setState({ sortType: value });
  };

  setCommentary = value => {
    this.setState({ commentary: value });
  };

  render() {
    const { commentary, sortType } = this.state;

    return (
      <div className="filter-settings themes">
        <div className="theme-category">
          <div className="header">
            <h3 className="label">Commentary</h3>
            <div className="sort-wrapper">
              <SortTypeButton
                customClassName={` left${
                  commentary === 'private' ? ' active' : ''
                }`}
                clickHandler={() => this.setCommentary('private')}
                caption="Private"
              />
              <SortTypeButton
                customClassName={` right${
                  commentary === 'public' ? ' active' : ''
                }`}
                clickHandler={() => this.setCommentary('public')}
                caption="Public"
              />
            </div>
            <h3 className="label">Themes</h3>
            <div className="sort-wrapper">
              <SortTypeButton
                customClassName={` flex-1 left${
                  sortType === 'pre' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('pre')}
                caption="Prevalence"
              />
              <SortTypeButton
                customClassName={` flex-1${
                  sortType === 'cohen' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('cohen')}
                caption="Cohension"
              />
              <SortTypeButton
                customClassName={` flex-1${
                  sortType === 'sent' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('sent')}
                caption="Sentiment"
              />
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
