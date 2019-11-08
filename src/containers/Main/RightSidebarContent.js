import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TabBar, StatusButton } from '../../components';

import Perception from './PerceptionSettings';
import Attributes from './AttributesSettings';
import Themes from './ThemeSettings';

class RightSidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Themes',
      analyzeStatus: 'normal',
    };
  }

  switchTab = tabName => {
    this.setState({ activeTab: tabName, analyzeStatus: 'normal' });
  };

  hanldeAnalysis = () => {
    const { analyzeStatus } = this.state;

    if (analyzeStatus !== 'loading') {
      this.setState({ analyzeStatus: 'loading' });
      setTimeout(() => this.setState({ analyzeStatus: 'done' }), 3000);
    }
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
    const { activeTab, analyzeStatus } = this.state;

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
            <StatusButton
              status={analyzeStatus}
              title="Run Analysis"
              clickHanlder={this.hanldeAnalysis}
            />
            <span className={analyzeStatus}>
              {analyzeStatus !== 'loading'
                ? `${Math.floor(Math.random() * 999)}k records found`
                : 'Loading'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSidebarContent;
