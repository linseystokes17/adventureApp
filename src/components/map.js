import React from 'react';
import { Text, StyleSheet, Image, Button,PermissionsAndroid, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {createMarker} from '../actions/markers';

export class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 5,
    }
  })

  state = {
    currentPosition: null,
    coordinates: [],
  }

  async componentDidMount() {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState((state) => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          coordinates: [
            ...state.coordinates,
            { latitude: coords.latitude, longitude: coords.longitude }
          ],
        }))
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    );
  }

  onCalloutPress = (e) => {
    const { coordinate } = e.nativeEvent;
    this.props.createMarker(
        coordinate,
        'We clicked at this point!!',
        'Have some fun at this location',
        'https://www.google.com/search?q=pikachu&sxsrf=ALeKk02jxOK-eAlKaDzeX2q2fl_WiIXF5g:1588023753871&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiI3vm9yYnpAhUZZc0KHQR0CBwQ_AUoAXoECBkQAw&biw=767&bih=712#imgrc=d3RIFxn-aCtPtM'
    );
  }

  render() {
    if (!this.state.currentPosition) return null;
    console.log(this.props);
    return (
        <MapView
          style={this.styles.flex}
          initialRegion={this.state.currentPosition}
        >
          <Polyline
            coordinates={this.state.coordinates}
            strokeWidth={5}
            strokeColor="red"
          />
          <Marker
            onPress={e => e.stopPropagation()}
            coordinate={this.state.currentPosition}
            title="Our Current Location"
            description="We did this during our online lecture because the COVID 19 virus made the world go really crazy"
          >
            <Callout onPress={this.onCalloutPress}>
              <Text>This is our location!</Text>
              <Button title="Press for more!"/>
            </Callout>
          </Marker>
          {
            this.props.markers.map(marker => (
              // <Circle
              //   onPress={e => e.stopPropagation()}
              //   key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
              //   center={marker.coordinate}
              //   strokeColor="green"
              //   strokeWidth={5}
              //   radius={100}
              //
              // />
              <Marker
                draggable
                onDragEnd={() => console.log("I drag ended")}
                onPress={e => e.stopPropagation()}
                key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
                { ...marker}
              />
            ))
          }
        </MapView>
    );
  }
}

const select = ({ markers }) => ({markers});
const mapDispatchToProps = {createMarker};
export default connect(select, mapDispatchToProps)(App);