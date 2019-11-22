import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { ThemeButton } from '../../components';
import { SortTypeButton } from './components';

import themeData from './data/themes.json';

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentary: 'private',
      sortType: 'sentiment',
      themesList: [],
    };
  }

  componentDidMount() {
    const { commentary, sortType } = this.state;

    this.updateThemesList(commentary, sortType);
  }

  updateThemesList = (commentary, sortType) => {
    const themeCategoryData = themeData.data.find(
      item => item.category === commentary
    );
    const sortedData =
      sortType === 'cohension'
        ? themeCategoryData.list.sort()
        : themeCategoryData.list.reverse();

    this.props.setThemes({
      themesList: {
        type: 'array',
        value:
          sortType === 'cohension'
            ? sortedData.filter(item => item.type === 'cohension')
            : sortedData.filter(item => item.type !== 'cohension'),
      },
      commentary: { type: 'radio', value: commentary },
      sortType: { type: 'radio', value: sortType },
    });
    this.setState({ themesList: sortedData, commentary, sortType });
  };

  changeSortType = value => {
    this.updateThemesList(this.state.commentary, value);
  };

  setCommentary = value => {
    this.updateThemesList(value, this.state.sortType);
  };

  renderThemes = () => {
    const { themesList, sortType } = this.state;

    return (
      <>
        {themesList
          .filter(item =>
            sortType === 'cohension'
              ? item.type === 'cohension'
              : item.type !== 'cohension'
          )
          .map((themeItem, index) => (
            <ThemeButton
              key={`theme_${index}`}
              caption={themeItem.name}
              value={themeItem.value}
              active={themeItem.status === 'active'}
            />
          ))}
      </>
    );
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
                  sortType === 'prevalence' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('prevalence')}
                caption="Prevalence"
              />
              <SortTypeButton
                customClassName={` flex-1${
                  sortType === 'cohension' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('cohension')}
                caption="Cohension"
              />
              <SortTypeButton
                customClassName={` flex-1 right${
                  sortType === 'sentiment' ? ' active' : ''
                }`}
                clickHandler={() => this.changeSortType('sentiment')}
                caption="Sentiment"
              />
            </div>
          </div>
          <div className="content flex-1">
            <Scrollbars>{this.renderThemes()}</Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Themes;
