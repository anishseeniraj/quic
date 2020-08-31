import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
 
const mapStyles = {
  width: "73%",
  height: "77%",
};
 
export class ViewActivity extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      id: this.props.match.params.id,
      latitude: this.props.match.params.lat,
      longitude: this.props.match.params.long,
    };
 
    console.log(this.state.latitude);
    console.log(this.state.longitude);
  }
 
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
      >
        <Marker onClick={this.onMarkerClick}></Marker>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyC1EU-pbZI5k0ko3WdgXpjypbnJjsO76oc",
})(ViewActivity);
 

