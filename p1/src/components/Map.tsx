// components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ countries }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country) => (
        <Marker key={country.cca3} position={[country.latlng[0], country.latlng[1]]}>
          <Popup>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <h3>Languages</h3>
            <ul>
              {Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
