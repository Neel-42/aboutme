import React, { useState } from 'react'
import Map from './components/Map'
import Timeline from './components/Timeline'
import MigrationPanel from './components/MigrationPanel'
import { migrations } from './data/migrations'
import './App.css'

function App() {
  const [selectedMigration, setSelectedMigration] = useState(null)

  const handleSelectMigration = (migration) => {
    setSelectedMigration(migration)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Colonial Food Migration Atlas</h1>
        <p>Exploring how colonial migrations shaped global food cultures</p>
      </header>

      <div className="app-content">
        <div className="sidebar">
          <Timeline
            migrations={migrations}
            selectedMigration={selectedMigration}
            onSelectMigration={handleSelectMigration}
          />
          <MigrationPanel migration={selectedMigration} />
        </div>

        <div className="map-section">
          <Map
            selectedMigration={selectedMigration}
            onMigrationSelect={handleSelectMigration}
          />
        </div>
      </div>

      <footer className="app-footer">
        <p>Interactive visualization of colonial migration patterns and their impact on food cultures</p>
      </footer>
    </div>
  )
}

export default App
