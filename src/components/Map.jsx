import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import FoodMarker from './FoodMarker'
import FoodLegend from './FoodLegend'
import './Map.css'

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

function MapController({ center, zoom }) {
  const map = useMap()
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || 3)
    }
  }, [center, zoom, map])
  
  return null
}

export default function Map({ selectedMigration, onMigrationSelect }) {
  const mapRef = useRef(null)

  const getRouteColor = (migrationId) => {
    const colors = {
      'spain-americas': '#e74c3c',
      'portugal-brazil': '#3498db',
      'britain-india': '#f39c12',
      'france-indochina': '#9b59b6',
      'netherlands-indonesia': '#1abc9c'
    }
    return colors[migrationId] || '#34495e'
  }

  const createRoute = (migration) => {
    if (!migration) return []
    
    const routes = []
    migration.destinations.forEach(dest => {
      routes.push([
        [migration.origin.lat, migration.origin.lng],
        [dest.lat, dest.lng]
      ])
    })
    return routes
  }

  return (
    <div className="map-container">
      {selectedMigration && <FoodLegend />}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {selectedMigration && (
          <>
            <MapController center={[selectedMigration.origin.lat, selectedMigration.origin.lng]} zoom={3} />
            
            {/* Origin marker */}
            <Marker position={[selectedMigration.origin.lat, selectedMigration.origin.lng]}>
              <Popup>
                <strong>Origin: {selectedMigration.origin.name}</strong>
                <br />
                {selectedMigration.name}
              </Popup>
            </Marker>
            
            {/* Destination markers */}
            {selectedMigration.destinations.map((dest, idx) => (
              <React.Fragment key={idx}>
                <Marker position={[dest.lat, dest.lng]}>
                  <Popup>
                    <strong>Destination: {dest.name}</strong>
                    <br />
                    {selectedMigration.name}
                  </Popup>
                </Marker>
                
                {/* Food icons - Foods Brought */}
                {selectedMigration.foodsBrought.map((food, foodIdx) => (
                  <FoodMarker
                    key={`brought-${idx}-${foodIdx}`}
                    food={food}
                    position={[dest.lat, dest.lng]}
                    type="brought"
                    destinationName={dest.name}
                    index={foodIdx}
                  />
                ))}
                
                {/* Food icons - Foods Received */}
                {selectedMigration.foodsReceived.map((food, foodIdx) => (
                  <FoodMarker
                    key={`received-${idx}-${foodIdx}`}
                    food={food}
                    position={[dest.lat, dest.lng]}
                    type="received"
                    destinationName={dest.name}
                    index={foodIdx}
                  />
                ))}
              </React.Fragment>
            ))}
            
            {/* Migration routes */}
            {createRoute(selectedMigration).map((route, idx) => (
              <Polyline
                key={idx}
                positions={route}
                color={getRouteColor(selectedMigration.id)}
                weight={4}
                opacity={0.7}
                dashArray="10, 10"
              />
            ))}
          </>
        )}
      </MapContainer>
    </div>
  )
}
