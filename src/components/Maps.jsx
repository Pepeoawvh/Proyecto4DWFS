import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const mapLoader = new Loader({
 apiKey: 'AIzaSyCS692xCkJWERPdUeDWAOya6GJrknP2qbU',
 version: 'weekly',
 libraries: ['places'],
});

class Map extends React.Component {
 componentDidMount() {
    mapLoader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.39323806762695, lng: -70.50421905517578 },
        zoom: 13,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: -33.39323806762695, lng: -70.50421905517578 },
        map: map,
        title: 'My location',
      });
    });
 }
 
 render() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
      <div id="map"  />
    </div>

    
  );
 }
}

export default Map;
