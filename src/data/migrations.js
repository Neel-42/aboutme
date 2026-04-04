// Sample data for colonial migrations and food cultures
export const migrations = [
  {
    id: 'spain-americas',
    name: 'Spanish Colonization of the Americas',
    period: '1492-1800',
    origin: { lat: 40.4168, lng: -3.7038, name: 'Spain' },
    destinations: [
      { lat: 19.4326, lng: -99.1332, name: 'Mexico' },
      { lat: -12.0464, lng: -77.0428, name: 'Peru' },
      { lat: 4.7110, lng: -74.0721, name: 'Colombia' },
      { lat: -33.4489, lng: -70.6693, name: 'Chile' }
    ],
    people: [
      'Spanish Conquistadors',
      'Spanish Settlers',
      'African Slaves',
      'Missionaries'
    ],
    foodsBrought: [
      { name: 'Wheat', impact: 'Replaced native grains in many regions' },
      { name: 'Olive Oil', impact: 'Became staple cooking fat' },
      { name: 'Citrus Fruits', impact: 'Introduced to tropical regions' },
      { name: 'Pork', impact: 'Integrated into local cuisines' },
      { name: 'Garlic', impact: 'Became essential seasoning' },
      { name: 'Rice', impact: 'Widely cultivated in suitable climates' }
    ],
    foodsReceived: [
      { name: 'Maize (Corn)', impact: 'Became staple in Europe' },
      { name: 'Potatoes', impact: 'Revolutionized European agriculture' },
      { name: 'Tomatoes', impact: 'Transformed Mediterranean cuisine' },
      { name: 'Chili Peppers', impact: 'Spiced up global cuisines' },
      { name: 'Cacao', impact: 'Became chocolate industry' },
      { name: 'Vanilla', impact: 'Popularized worldwide' }
    ],
    indigenousImpact: 'Spanish colonization created fusion cuisines like Mexican, Peruvian, and Filipino food, blending European techniques with native ingredients.'
  },
  {
    id: 'portugal-brazil',
    name: 'Portuguese Colonization of Brazil',
    period: '1500-1822',
    origin: { lat: 38.7223, lng: -9.1393, name: 'Portugal' },
    destinations: [
      { lat: -23.5505, lng: -46.6333, name: 'Brazil' }
    ],
    people: [
      'Portuguese Explorers',
      'Portuguese Settlers',
      'African Slaves',
      'Indigenous Peoples'
    ],
    foodsBrought: [
      { name: 'Codfish', impact: 'Became national dish (Bacalhau)' },
      { name: 'Wine', impact: 'Introduced viticulture' },
      { name: 'Olive Oil', impact: 'Cooking staple' },
      { name: 'Almonds', impact: 'Used in desserts' }
    ],
    foodsReceived: [
      { name: 'Cassava', impact: 'Became important crop' },
      { name: 'Açaí', impact: 'Popularized globally' },
      { name: 'Brazil Nuts', impact: 'Exported worldwide' }
    ],
    indigenousImpact: 'Created unique Brazilian cuisine combining Portuguese, African, and indigenous traditions, including feijoada and churrasco.'
  },
  {
    id: 'britain-india',
    name: 'British Colonization of India',
    period: '1757-1947',
    origin: { lat: 51.5074, lng: -0.1278, name: 'United Kingdom' },
    destinations: [
      { lat: 28.6139, lng: 77.2090, name: 'India' },
      { lat: 6.9271, lng: 79.8612, name: 'Sri Lanka' }
    ],
    people: [
      'British Colonists',
      'British Soldiers',
      'British Administrators',
      'Scottish Planters'
    ],
    foodsBrought: [
      { name: 'Tea', impact: 'Established tea plantations' },
      { name: 'Potatoes', impact: 'Introduced to Indian cuisine' },
      { name: 'Bread', impact: 'Western-style breads adopted' },
      { name: 'Custard', impact: 'Influenced desserts' }
    ],
    foodsReceived: [
      { name: 'Curry', impact: 'Became British national dish' },
      { name: 'Spices', impact: 'Transformed British cuisine' },
      { name: 'Chutney', impact: 'Popular condiment' },
      { name: 'Mango', impact: 'Beloved fruit' }
    ],
    indigenousImpact: 'British rule led to the creation of Anglo-Indian cuisine and the global spread of curry, while tea became India\'s largest export.'
  },
  {
    id: 'france-indochina',
    name: 'French Colonization of Indochina',
    period: '1858-1954',
    origin: { lat: 48.8566, lng: 2.3522, name: 'France' },
    destinations: [
      { lat: 10.8231, lng: 106.6297, name: 'Vietnam' },
      { lat: 11.5564, lng: 104.9282, name: 'Cambodia' },
      { lat: 17.9757, lng: 102.6331, name: 'Laos' }
    ],
    people: [
      'French Colonists',
      'French Administrators',
      'French Missionaries'
    ],
    foodsBrought: [
      { name: 'Baguette', impact: 'Bánh mì created' },
      { name: 'Coffee', impact: 'Vietnamese coffee culture' },
      { name: 'Butter', impact: 'French cooking techniques' },
      { name: 'Wine', impact: 'Introduced viticulture' }
    ],
    foodsReceived: [
      { name: 'Fish Sauce', impact: 'Used in fusion dishes' },
      { name: 'Rice Paper', impact: 'Influenced French cuisine' },
      { name: 'Lemongrass', impact: 'Popularized in West' }
    ],
    indigenousImpact: 'Created fusion cuisine like bánh mì (Vietnamese sandwich) and influenced French cuisine with Southeast Asian flavors.'
  },
  {
    id: 'netherlands-indonesia',
    name: 'Dutch Colonization of Indonesia',
    period: '1602-1949',
    origin: { lat: 52.3676, lng: 4.9041, name: 'Netherlands' },
    destinations: [
      { lat: -6.2088, lng: 106.8456, name: 'Indonesia' }
    ],
    people: [
      'Dutch Traders',
      'Dutch Colonists',
      'Dutch Administrators'
    ],
    foodsBrought: [
      { name: 'Potatoes', impact: 'Introduced to Indonesian cuisine' },
      { name: 'Cabbage', impact: 'Used in local dishes' },
      { name: 'Carrots', impact: 'Added to traditional recipes' },
      { name: 'Dutch Cheese', impact: 'Limited local production' }
    ],
    foodsReceived: [
      { name: 'Spices', impact: 'Spice trade foundation' },
      { name: 'Nutmeg', impact: 'Monopoly established' },
      { name: 'Cloves', impact: 'Highly valued' },
      { name: 'Pepper', impact: 'Major export' }
    ],
    indigenousImpact: 'Dutch control of the spice trade shaped global economics. Indonesian rijsttafel (rice table) influenced Dutch cuisine.'
  }
]

export const getMigrationById = (id) => {
  return migrations.find(m => m.id === id)
}
