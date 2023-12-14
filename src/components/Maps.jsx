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
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.39323806762695, lng: -70.50421905517578 },
        zoom: 14,
      });
 
      const marker = new google.maps.Marker({
        position: { lat: -33.39323806762695, lng: -70.50421905517578 },
        map: map,
        title: 'My location',
      });
    });
 }
 
 render() {
    return <div id="map" style={{ width: '100%', height: '400px' }} />;
 }
}
 
export default Map;
 
 