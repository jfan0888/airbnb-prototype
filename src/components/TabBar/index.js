import React from 'react';
import PropTypes from 'prop-types';

import TabItem from './TabItem';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { items, activeTab, onSelect, type } = this.props;

    return (
      <div className={`tab-bar d-flex ${type}`}>
        {items &&
          items.map((item, index) => (
            <TabItem
              key={`tab-${index}`}
              data={item}
              activeTab={activeTab}
              onSelect={onSelect}
            />
          ))}
      </div>
    );
  }
}

TabBar.propTypes = {
  type: PropTypes.string,
};

TabBar.defaultProps = {
  type: '',
};

export default TabBar;
