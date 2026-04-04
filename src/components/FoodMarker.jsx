import React from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import './FoodMarker.css'

// Food emoji mapping
const foodIcons = {
  'Wheat': '🌾',
  'Olive Oil': '🫒',
  'Citrus Fruits': '🍊',
  'Pork': '🥓',
  'Garlic': '🧄',
  'Rice': '🍚',
  'Maize (Corn)': '🌽',
  'Potatoes': '🥔',
  'Tomatoes': '🍅',
  'Chili Peppers': '🌶️',
  'Cacao': '🍫',
  'Vanilla': '🌿',
  'Codfish': '🐟',
  'Wine': '🍷',
  'Almonds': '🥜',
  'Cassava': '🥔',
  'Açaí': '🫐',
  'Brazil Nuts': '🥜',
  'Tea': '🍵',
  'Bread': '🍞',
  'Custard': '🍮',
  'Curry': '🍛',
  'Spices': '🧂',
  'Chutney': '🥭',
  'Mango': '🥭',
  'Baguette': '🥖',
  'Coffee': '☕',
  'Butter': '🧈',
  'Fish Sauce': '🐟',
  'Rice Paper': '📄',
  'Lemongrass': '🌿',
  'Cabbage': '🥬',
  'Carrots': '🥕',
  'Dutch Cheese': '🧀',
  'Nutmeg': '🌰',
  'Cloves': '🌿',
  'Pepper': '🌶️',
  'Sugar': '🍬',
  'Barley': '🌾',
  'Herbs like thyme': '🌿',
  'Okra': '🥗',
  'Seafood': '🦐'
}

// Create custom food icon
const createFoodIcon = (foodName, type) => {
  const emoji = foodIcons[foodName] || '🍽️'
  const iconColor = type === 'brought' ? '#3498db' : '#e74c3c'
  
  return L.divIcon({
    className: 'food-marker',
    html: `
      <div class="food-icon-container" style="background-color: ${iconColor}">
        <span class="food-emoji">${emoji}</span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  })
}

export default function FoodMarker({ food, position, type, destinationName, index }) {
  const icon = createFoodIcon(food.name, type)
  const offset = type === 'brought' ? 0.3 : -0.3 // Offset to separate brought vs received foods
  
  // Calculate offset based on index to prevent overlapping
  const angle = (index * 30) * (Math.PI / 180) // 30 degrees per food item
  const radius = 0.15 // Distance from destination marker
  const latOffset = Math.cos(angle) * radius
  const lngOffset = (Math.sin(angle) * radius) + offset
  
  const markerPosition = [
    position[0] + latOffset,
    position[1] + lngOffset
  ]

  return (
    <Marker position={markerPosition} icon={icon}>
      <Tooltip permanent={false} direction="top" offset={[0, -10]}>
        <div className="food-tooltip">
          <strong>{food.name}</strong>
        </div>
      </Tooltip>
      <Popup>
        <div className="food-popup">
          <div className="food-popup-header">
            <span className="food-popup-emoji">{foodIcons[food.name] || '🍽️'}</span>
            <h3>{food.name}</h3>
          </div>
          <div className="food-popup-type">
            <span className={`type-badge ${type}`}>
              {type === 'brought' ? '🍽️ Brought to' : '🌾 Received from'} {destinationName}
            </span>
          </div>
          <div className="food-popup-impact">
            <strong>Impact:</strong>
            <p>{food.impact}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
