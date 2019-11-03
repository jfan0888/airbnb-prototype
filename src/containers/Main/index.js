import React from 'react';
import styled from 'styled-components';

import ReactMapboxGl, { Marker, Cluster, Popup } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Loading, Slider, DateInput, Sidebar } from '../../components';
import { mapboxToken } from '../../config';

import LeftSidebarContent from './LeftSidebarContent';
import RightSidebarContent from './RightSidebarContent';
const falls = require('./falls.json');

const styles = {
  marker: {
    minWidth: 20,
    minHeight: 20,
    borderRadius: '50%',
    backgroundColor: '#EF5B48',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
};

const Map = ReactMapboxGl({ accessToken: mapboxToken });
const StyledPopup = styled.div`
  background: white;
  color: #3f618c;
  font-weight: 400;
  padding: 5px;
  border-radius: 2px;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      openLeftSidebar: false,
      openRightSidebar: false,
      nodeSize: 3,
      popup: undefined,
    };
    this.zoom = [2];
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  clusterMarker = (coordinates, pointCount, getLeaves) => (
    <Marker
      key={coordinates.toString()}
      coordinates={coordinates}
      style={{
        ...styles.marker,
        width: Math.log10(pointCount) * 30,
        height: Math.log10(pointCount) * 30,
      }}
      onClick={this.clusterClick.bind(this, coordinates, pointCount, getLeaves)}
    >
      <div>{pointCount}</div>
    </Marker>
  );

  onMove = () => {
    if (this.state.popup) {
      this.setState({ popup: undefined });
    }
  };

  clusterClick = (coordinates, total, getLeaves) => {
    this.setState({
      popup: {
        coordinates,
        total,
        leaves: getLeaves(),
      },
    });
  };

  onStyleLoad = map => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

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
          <Map
            style="mapbox://styles/mapbox/light-v9"
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
            zoom={this.zoom}
            onStyleLoad={this.onStyleLoad}
            onMove={this.onMove}
            renderChildrenInPortal
          >
            <Cluster ClusterMarkerFactory={this.clusterMarker}>
              {falls.features.map((feature, key) => (
                <Marker
                  key={key}
                  style={styles.marker}
                  coordinates={feature.geometry.coordinates}
                  data-feature={feature}
                >
                  <div title={feature.properties.name}>
                    {feature.properties.name[0]}
                  </div>
                </Marker>
              ))}
            </Cluster>
            {popup && (
              <Popup offset={[0, -50]} coordinates={popup.coordinates}>
                <StyledPopup>
                  {popup.leaves.map((leaf, index) => (
                    <div key={index}>
                      {leaf.props['data-feature'].properties.name}
                    </div>
                  ))}
                  {popup.total > popup.leaves.length ? (
                    <div>And more...</div>
                  ) : null}
                </StyledPopup>
              </Popup>
            )}
          </Map>
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
