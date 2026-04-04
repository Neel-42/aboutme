import React from 'react'
import './Timeline.css'

export default function Timeline({ migrations, selectedMigration, onSelectMigration }) {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Colonial Migration Timeline</h2>
      <div className="timeline">
        {migrations.map((migration, idx) => (
          <div
            key={migration.id}
            className={`timeline-item ${selectedMigration?.id === migration.id ? 'active' : ''}`}
            onClick={() => onSelectMigration(migration)}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{migration.name}</h3>
              <p className="timeline-period">{migration.period}</p>
              <p className="timeline-origin">From: {migration.origin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
