import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Popup } from 'react-mapbox-gl';

import { TabBar } from '../../../components';

const closeIcon = require('../../../assets/icons/close.svg');

class MapPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Attributes',
    };
  }

  switchTab = item => {
    this.setState({ activeTab: item });
  };

  render() {
    const { popup } = this.props;
    const { activeTab } = this.state;

    return (
      <Popup offset={[0, -50]} coordinates={popup.coordinates}>
        <div className="map-popup-content">
          {/* {popup.leaves.map((leaf, index) => (
              <div key={index}>{leaf.props['data-feature'].properties.name}</div>
          ))}
          {popup.total > popup.leaves.length ? <div>And more...</div> : null} */}
          <a className="map-popup-close" onClick={this.props.onClose}>
            <img src={closeIcon} />
          </a>
          <div className="title">ID 452232</div>
          <div className="duration">Octobor 12 - Octobor 23</div>
          <TabBar
            items={['Attributes', 'Comments']}
            activeTab={activeTab}
            onSelect={this.switchTab}
            type="small"
          />
          <div className="tab-content-wrapper">
            <Scrollbars>
              {activeTab === 'Comments' && (
                <div className="content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eleifend, diam et aliquam mollis, ante nunc suscipit nisl,
                  mollis pretium nulla elit ac nulla. In vel nisi id orci tempor
                  condimentum. Vivamus rutrum purus ac lectus convallis
                  vestibulum. Donec orci sapien, vehicula non faucibus id,
                  rutrum eget dolor. Ut mattis elementum gravida. Donec orci
                  sapien, vehicula non faucibus id, rutr
                </div>
              )}
            </Scrollbars>
          </div>
        </div>
      </Popup>
    );
  }
}

export default MapPopup;
