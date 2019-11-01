import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TabBar, Button } from '../../components';

import Perception from './PerceptionSettings';
import Attributes from './AttributesSettings';
import Themes from './ThemeSettings';

class RightSidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Themes',
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
      case 'Themes':
        return <Themes />;
      default:
        return null;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="sidebar-content right">
        <div className="close-button-wrapper" onClick={this.props.closeHandler}>
          <a className="button">
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className="d-flex flex-column main">
          <h4 className="title">Filters</h4>
          <TabBar
            items={['Themes', 'Attributes', 'Perception']}
            activeTab={activeTab}
            onSelect={this.switchTab}
          />
          <div className="flex-1">{this.renderSettings()}</div>
          <div className="anlaysis-wrapper">
            <Button type="action" title="Run Analysis" />
          </div>
        </div>
      </div>
    );
  }
}

export default RightSidebarContent;
