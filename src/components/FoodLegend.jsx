import React from 'react'
import './FoodLegend.css'

export default function FoodLegend() {
  return (
    <div className="food-legend">
      <h4>Food Icons</h4>
      <div className="legend-items">
        <div className="legend-item">
          <div className="legend-icon brought"></div>
          <span>Foods Brought</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon received"></div>
          <span>Foods Received</span>
        </div>
      </div>
      <p className="legend-hint">Hover over food icons to see descriptions</p>
    </div>
  )
}
