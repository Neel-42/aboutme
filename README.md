# Colonial Food Migration Atlas

An interactive website that visualizes colonial migration patterns and their impact on global food cultures. Explore how people, foods, and culinary traditions moved across the world during colonial times.

## Features

- **Interactive World Map**: Visualize migration routes from colonial powers to their colonies
- **Timeline Navigation**: Browse different colonial periods and migrations
- **Migration Details**: Learn about:
  - People who migrated (conquistadors, settlers, slaves, etc.)
  - Foods brought to new lands
  - Foods received from colonies
  - Impact on indigenous food cultures
- **Beautiful UI**: Modern, responsive design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Map.jsx          # Interactive map with Leaflet
│   │   ├── Timeline.jsx     # Timeline component for navigation
│   │   └── MigrationPanel.jsx # Details panel for selected migration
│   ├── data/
│   │   └── migrations.js    # Migration data (people, foods, routes)
│   ├── App.jsx              # Main application component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Current Migrations Included

1. **Spanish Colonization of the Americas** (1492-1800)
2. **Portuguese Colonization of Brazil** (1500-1822)
3. **British Colonization of India** (1757-1947)
4. **French Colonization of Indochina** (1858-1954)
5. **Dutch Colonization of Indonesia** (1602-1949)

## Adding New Migrations

To add new migration data, edit `src/data/migrations.js` and add a new migration object with the following structure:

```javascript
{
  id: 'unique-id',
  name: 'Migration Name',
  period: 'Start-End Year',
  origin: { lat: 0, lng: 0, name: 'Origin Country' },
  destinations: [
    { lat: 0, lng: 0, name: 'Destination' }
  ],
  people: ['Group 1', 'Group 2'],
  foodsBrought: [
    { name: 'Food', impact: 'Description' }
  ],
  foodsReceived: [
    { name: 'Food', impact: 'Description' }
  ],
  indigenousImpact: 'Description of impact'
}
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Leaflet** - Interactive maps
- **React-Leaflet** - React bindings for Leaflet
- **CSS3** - Styling with modern features

## License

This project is open source and available for educational purposes.
