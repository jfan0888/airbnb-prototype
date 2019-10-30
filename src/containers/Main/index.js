import React from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Loading, Slider, DateInput, Sidebar } from '../../components';
import { mapboxToken } from '../../config';

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
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
    };
  }

  componentDidMount() {
    //
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
    const { loading, openLeftSidebar, openRightSidebar, nodeSize } = this.state;

    return (
      <div className="main-container d-flex flex-column">
        <div className="sidebar-wrapper">
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
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={mapboxToken}
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </div>
        <div className="page-footer">
          <Slider defaultValue={[30, 75]} />
          <div className="date-range-wrapper d-flex">
            <div className="start-date">
              <DateInput />
            </div>
            <div className="start-date">
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
