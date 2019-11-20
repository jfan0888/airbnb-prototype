import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TabBar, StatusButton } from '../../components';
import { setPerception, setThemes, setAttributes } from '../../actions';

import Perception from './PerceptionSettings';
import Attributes from './AttributesSettings';
import Themes from './ThemeSettings';

class RightSidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Themes',
      analyzeStatus: 'normal',
      perceptionSettings: null,
      themeSettings: null,
      attributesSettings: null,
    };
  }

  componentDidMount() {
    this.resetFilterSettings(this.props);
  }

  resetFilterSettings = props => {
    const {
      perceptionSettingsValue,
      attributesSettingsValue,
      themeSettingsValue,
    } = props;

    if (
      perceptionSettingsValue &&
      attributesSettingsValue &&
      themeSettingsValue
    ) {
      this.setState({
        perceptionSettings: perceptionSettingsValue,
        attributesSettings: attributesSettingsValue,
        themeSettings: themeSettingsValue,
      });
    }
  };

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
    const {
      activeTab,
      perceptionSettings,
      themeSettings,
      attributesSettings,
    } = this.state;

    switch (activeTab) {
      case 'Perception':
        return (
          <Perception
            settings={perceptionSettings}
            setPerception={this.props.setPerception}
          />
        );
      case 'Attributes':
        return (
          <Attributes
            settings={attributesSettings}
            setAttributes={this.props.setAttributes}
          />
        );
      case 'Themes':
        return (
          <Themes settings={themeSettings} setThemes={this.props.setThemes} />
        );
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
          <div className="analaysis-wrapper">
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

const mapStateToProps = state => ({
  perceptionSettingsValue: state.perception.data,
  attributesSettingsValue: state.attributes.data,
  themeSettingsValue: state.themes.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPerception, setThemes, setAttributes }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebarContent);
