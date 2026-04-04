import React from 'react'
import './MigrationPanel.css'

export default function MigrationPanel({ migration }) {
  if (!migration) {
    return (
      <div className="migration-panel">
        <div className="panel-placeholder">
          <h2>🌍 Colonial Food Migration Atlas</h2>
          <p>Select a migration route from the timeline to explore how colonial movements shaped global food cultures.</p>
          <div className="info-grid">
            <div className="info-card">
              <h3>📍 Migration Routes</h3>
              <p>Interactive map showing origin and destination points</p>
            </div>
            <div className="info-card">
              <h3>👥 People</h3>
              <p>Learn about the groups who migrated</p>
            </div>
            <div className="info-card">
              <h3>🍽️ Foods Brought</h3>
              <p>Discover ingredients introduced to new lands</p>
            </div>
            <div className="info-card">
              <h3>🌾 Foods Received</h3>
              <p>See what colonizers took back home</p>
            </div>
            <div className="info-card">
              <h3>🌱 Indigenous Impact</h3>
              <p>Understand how local cuisines were transformed</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="migration-panel">
      <div className="panel-header">
        <h2>{migration.name}</h2>
        <span className="period-badge">{migration.period}</span>
      </div>

      <div className="panel-content">
        <section className="section">
          <h3>👥 People Who Migrated</h3>
          <div className="people-list">
            {migration.people.map((person, idx) => (
              <span key={idx} className="person-tag">{person}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>🍽️ Foods Brought</h3>
          <div className="foods-list">
            {migration.foodsBrought.map((food, idx) => (
              <div key={idx} className="food-item">
                <div className="food-name">{food.name}</div>
                <div className="food-impact">{food.impact}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>🌾 Foods Received</h3>
          <div className="foods-list">
            {migration.foodsReceived.map((food, idx) => (
              <div key={idx} className="food-item">
                <div className="food-name">{food.name}</div>
                <div className="food-impact">{food.impact}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>🌱 Impact on Indigenous Food</h3>
          <p className="impact-text">{migration.indigenousImpact}</p>
        </section>
      </div>
    </div>
  )
}
