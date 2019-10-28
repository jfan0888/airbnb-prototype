import React from 'react';

import TabItem from './TabItem';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { items, activeTab, onSelect } = this.props;

    return (
      <div className="tab-bar d-flex">
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

export default TabBar;
