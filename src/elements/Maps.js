import React from 'react';

import { Modal, Button} from 'react-materialize';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


// https://www.google.com/maps/dir//Utah+Countertops,+358+W+5900+S,+Murray,+UT+84107/@40.6433467,-111.9022248,17z/

class MapContainer extends React.Component {
  onMarkerClick = (props, marker, e) =>
      this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,

      });
  state = {
      selectedPlace: 'LHP'
  }
  render() {
      return (
          <Modal
          className="glass"
              actions={[
                  <Button flat modal="close" node="button" waves="green">Close</Button>
              ]}
              bottomSheet={false}
              fixedFooter={false}
              id="Modal-0"
              open={false}
              options={{
                  dismissible: true,
                  endingTop: '10%',
                  inDuration: 250,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  opacity: 0.5,
                  outDuration: 250,
                  preventScrolling: true,
                  startingTop: '4%'
              }}
              trigger={
                <a className="btn-floating btn-large light-blue darken-4" href="tel://+14356551446">
                <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">map</i>
              </a>
                    } >
              <div style={{ width: '100%', height: 400, position: 'relative' }}>
                  <a rel="noopener noreferrer" target="_blank" href="https://g.page/utahcountertops?share">
                      <h5>Utah Countertops, 358 W 5900 S, Murray, UT 84107</h5>
                      <Map google={this.props.google} zoom={14} initialCenter={{ lat: 40.6434, lng: -111.90 }}>
                          <Marker onClick={this.onMarkerClick} />
                          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                              <div>
                                  <h1>{this.state.selectedPlace}</h1>
                              </div>
                          </InfoWindow>
                      </Map>
                  </a>
              </div>
          </Modal>

      );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCs2C3ErvkDU8tUGEuRrtAKPfu6upM66Mc')
})(MapContainer)
