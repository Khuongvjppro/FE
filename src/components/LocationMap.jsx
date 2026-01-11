import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationMarker({ position, setPosition, onLocationSelect }) {
  const map = useMapEvents({
    click(e) {
      const newPos = [e.latlng.lat, e.latlng.lng];
      setPosition(newPos);
      
      // Reverse geocoding để lấy địa chỉ
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
        .then(res => res.json())
        .then(data => {
          if (data.display_name) {
            onLocationSelect(data.display_name, newPos);
          }
        })
        .catch(err => console.error('Geocoding error:', err));
    },
  });

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  return position ? <Marker position={position} /> : null;
}

function LocationMap({ onLocationSelect, initialPosition }) {
  const [position, setPosition] = useState(initialPosition || [10.8231, 106.6297]); // Default: Ho Chi Minh City

  useEffect(() => {
    // Get user's current location
    if (!initialPosition && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newPos = [pos.coords.latitude, pos.coords.longitude];
          setPosition(newPos);
          
          // Get address for current location
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            .then(res => res.json())
            .then(data => {
              if (data.display_name) {
                onLocationSelect(data.display_name, newPos);
              }
            })
            .catch(err => console.error('Geocoding error:', err));
        },
        () => {
          console.log('Unable to retrieve your location');
        }
      );
    }
  }, [initialPosition, onLocationSelect]);

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ 
        fontWeight: 600, 
        marginBottom: 8, 
        display: 'flex', 
        alignItems: 'center',
        gap: 6
      }}>
        <span style={{ fontSize: 18 }}>📍</span>
        <span>Chọn vị trí trên bản đồ</span>
      </div>
      <div style={{ 
        borderRadius: 12, 
        overflow: 'hidden', 
        border: '2px solid #e0e0e0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '300px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker 
            position={position} 
            setPosition={setPosition} 
            onLocationSelect={onLocationSelect}
          />
        </MapContainer>
      </div>
      <div style={{ 
        fontSize: 13, 
        color: '#666', 
        marginTop: 6,
        fontStyle: 'italic'
      }}>
        💡 Nhấp vào bản đồ để chọn vị trí giao hàng chính xác
      </div>
    </div>
  );
}

export default LocationMap;
