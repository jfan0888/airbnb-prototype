import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TabBar } from '../../components';

import Perception from './PerceptionSettings';
import Attributes from './AttributesSettings';

class RightSidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Perception',
    };
  }

  switchTab = tabName => {
    this.setState({ activeTab: tabName });
  };

  renderSettings = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case 'Perception':
        return <Perception />;
      case 'Attributes':
        return <Attributes />;
      default:
        return null;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="sidebar-content right">
        <div className="close-button-wrapper">
          <a className="button" onClick={this.props.closeHandler}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className="main">
          <h4 className="title">Filters</h4>
          <TabBar
            items={['Themes', 'Attributes', 'Perception']}
            activeTab={activeTab}
            onSelect={this.switchTab}
          />
          <Scrollbars style={{ height: '80%' }}>
            <div className="tab-content">{this.renderSettings()}</div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default RightSidebarContent;
