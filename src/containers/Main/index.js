import React from 'react';
import styled from 'styled-components';

import ReactMapboxGl, { Marker, Cluster, ZoomControl } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Loading, Slider, DateInput, Sidebar } from '../../components';
import { MapPopup } from './components';
import { mapboxToken, centerPosition } from '../../config';

import LeftSidebarContent from './LeftSidebarContent';
import RightSidebarContent from './RightSidebarContent';

const falls = require('./falls.json');
const styles = {
  marker: {
    minWidth: 30,
    minHeight: 30,
    borderRadius: '50%',
    backgroundColor: '#EF5B48',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
};

const Map = ReactMapboxGl({ accessToken: mapboxToken, scrollZoom: false });

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      openLeftSidebar: false,
      openRightSidebar: true,
      nodeSize: 3,
      popup: null,
      center: null,
    };
    this.zoom = [3];
  }

  componentDidMount() {
    this.setState({ center: centerPosition });
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
      onClick={() => this.clusterClick(coordinates, pointCount, getLeaves)}
    >
      <div>{pointCount}</div>
    </Marker>
  );

  onMove = () => {
    //
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
            center={center || centerPosition}
            maxZoom={12}
            scrollZoom={true}
            movingMethod="flyTo"
          >
            <ZoomControl
              className="mapbox-zoom-control"
              position="bottom-left"
            />
            <Cluster ClusterMarkerFactory={this.clusterMarker}>
              {falls.features.map((feature, key) => (
                <Marker
                  key={key}
                  style={styles.marker}
                  coordinates={feature.geometry.coordinates}
                  data-feature={feature}
                  onClick={evt =>
                    this.setState({ center: feature.geometry.coordinates })
                  }
                >
                  <div title={feature.properties.name}>
                    {feature.properties.name[0]}
                  </div>
                </Marker>
              ))}
            </Cluster>
            {popup && (
              <MapPopup
                popup={popup}
                onClose={() => this.setState({ popup: null })}
              />
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
