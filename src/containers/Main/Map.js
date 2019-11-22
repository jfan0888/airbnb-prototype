import React from 'react';

import ReactMapboxGl, { Marker, Cluster, ZoomControl } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MapPopup } from './components';
import { mapboxToken, centerPosition } from '../../config';

const falls = require('./data/falls.json');
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

const Map = ReactMapboxGl({ accessToken: mapboxToken });

class CustomMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: null,
      center: null,
      zoom: [3],
    };
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
      center: coordinates,
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

  render() {
    const { popup, center, zoom } = this.state;

    return (
      <Map
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={zoom}
        onStyleLoad={this.onStyleLoad}
        onMove={this.onMove}
        renderChildrenInPortal
        center={center || centerPosition}
        maxZoom={12}
        scrollZoom={true}
        movingMethod="flyTo"
      >
        <ZoomControl className="mapbox-zoom-control" position="bottom-left" />
        <Cluster ClusterMarkerFactory={this.clusterMarker}>
          {falls.features.map((feature, key) => (
            <Marker
              key={key}
              style={styles.marker}
              coordinates={feature.geometry.coordinates}
              data-feature={feature}
              onClick={evt =>
                this.setState({
                  center: [
                    feature.geometry.coordinates[0],
                    feature.geometry.coordinates[1] + 4,
                  ],
                  zoom: [4],
                  popup: {
                    coordinates: feature.geometry.coordinates,
                    total: 1,
                    leaves: null,
                  },
                })
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
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomMap)
);
