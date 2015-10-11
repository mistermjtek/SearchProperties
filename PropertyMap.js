'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component,
  MapView
} = React;

class PropertyMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapRegion: this._getRegion(props.property),
      mapRegionInput: null,
      annotations: this._getAnnotations(props.property),
      isFirstLoad: true,
    };
  }

  _getAnnotations(region) {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'Location',
    }];
  }

  _getRegion(region) {
    return {
      longitude: region.longitude,
      latitude: region.latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.02
    };
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          // onRegionChange={this._onRegionChange}
          // onRegionChangeComplete={this._onRegionChangeComplete}
          region={this.state.mapRegion || undefined}
          annotations={this.state.annotations || undefined} />
      </View>
    );
  }

};

var styles = StyleSheet.create({
  map: {
    height: 150,
    margin: 5,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

module.exports = PropertyMap;