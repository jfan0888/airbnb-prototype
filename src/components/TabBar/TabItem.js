import React from 'react';

class TabItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { data, activeTab, onSelect } = this.props;

    return (
      <div
        className={`tab-item${data === activeTab ? ' active' : ''}`}
        onClick={() => onSelect(data)}
      >
        {data}
      </div>
    );
  }
}

export default TabItem;
