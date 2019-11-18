import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Slider, DateInput, Sidebar } from '../../components';
import { MapPopup } from './components';
import { centerPosition } from '../../config';
import DataModel from '../../../public/assets/js/datamodel';

import LeftSidebarContent from './LeftSidebarContent';
import RightSidebarContent from './RightSidebarContent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      openLeftSidebar: false,
      openRightSidebar: false,
      nodeSize: 3,
      popup: null,
      center: null,
    };
    this.zoom = [3];
  }

  componentDidMount() {
    this.setState({ center: centerPosition });
    const script2 = document.createElement('script');
    script2.src = '/assets/js/filter.js';
    script2.async = true;
    document.body.appendChild(script2);

    const script1 = document.createElement('script');
    script1.src = '/assets/js/popup.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script = document.createElement('script');
    script.src = '/assets/js/aux.js';
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  handleChangeNodeSize = value => {
    this.setState({ nodeSize: value });
  };

  openLeftSidebar = status => {
    this.setState({ openLeftSidebar: status });
  };

  openRightSidebar = status => {
    this.setState({ openRightSidebar: status });
  };

  render() {
    const {
      loading,
      openLeftSidebar,
      openRightSidebar,
      nodeSize,
      popup,
      center,
    } = this.state;

    return (
      <div className="main-container d-flex flex-column">
        <div>
          <Sidebar
            type="left"
            open={openLeftSidebar}
            toggleHandler={this.openLeftSidebar}
          >
            <LeftSidebarContent
              nodeSize={nodeSize}
              handleChangeNodeSize={this.handleChangeNodeSize}
              closeHandler={() => this.openLeftSidebar(false)}
            />
          </Sidebar>
          <Sidebar
            type="right"
            open={openRightSidebar}
            toggleHandler={this.openRightSidebar}
          >
            <RightSidebarContent
              closeHandler={() => this.openRightSidebar(false)}
            />
          </Sidebar>
        </div>
        <div className="page-content d-flex flex-column align-items-center">
          <div id="map" />
          <div id="wordtree">
            <div className="wrapper wordtree">
              <div className="wordtree__search">
                <div className="wordtree__searchtext">
                  <input type="text" id="wordtree_root" />
                </div>

                <div className="wordtree__searchsetting">
                  <div className="wordtree__searchsetting--left">
                    <label>Popular terms:</label>
                    <ul id="wordtree_tags" className="wttags"></ul>
                  </div>
                  <div className="wordtree__searchsetting--right">
                    <label>Switch Layout</label>
                    <select id="wordtree_layout_switch">
                      <option value="suffix">Left</option>
                      <option value="prefix">Right</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="wordtree__body" id="wordtree_graph">
                <div id="wt_vis" className="wt-graph">
                  <div id="wt_text" className="wt-textviewer"></div>
                  <div id="wt_help">
                    Shift-click to make that word the root.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <Slider defaultValue={[30, 75]} />
          <div className="date-range-wrapper d-flex">
            <div className="start-date">
              <DateInput />
            </div>
            <div className="end-date">
              <DateInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
