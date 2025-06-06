"use client"
import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.2gis.com/js/DGWidgetLoader.js';
    script.async = true;

    script.onload = () => {
      new window.DGWidgetLoader({
        width: 640,
        height: 600,
        borderColor: '#a3a3a3',
        pos: {
          lat: 51.144948155442506,
          lon: 71.37062072753908,
          zoom: 15,
        },
        opt: {
          city: 'nur_sultan',
        },
        org: [{ id: '70000001067098542' }],
      });
    };

    const mapContainer = document.createElement('div');
    mapContainer.id = '2gis_map_container'; 
    document.getElementById('map_container').appendChild(mapContainer);
    mapContainer.appendChild(script);

    return () => {
      mapContainer.removeChild(script);
      document.getElementById('map_container').removeChild(mapContainer);
    };
  }, []);

  return (
    <div id="map_container">
      {/* Other content on the page */}
    </div>
  );
};

export default MapComponent;
