// Google Maps implementation for Pornichet restaurants and POIs
// Center coordinates for Pornichet, France: 47.26°N, -2.34°W

let map;
let infoWindow;

// Initialize the map
function initMap() {
  // Center on Pornichet
  const pornichet = { lat: 47.26, lng: -2.34 };
  
  // Create the map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: pornichet,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      }
    ]
  });
  
  // Create info window (shared for all markers)
  infoWindow = new google.maps.InfoWindow();
  
  // Add markers for recommended locations
  addRecommendedLocations();
}

// Add markers for recommended restaurants and POIs
function addRecommendedLocations() {
  const locations = [
    {
      position: { lat: 47.2595, lng: -2.3385 },
      title: "Le Belem",
      type: "restaurant",
      description: "Restaurant de fruits de mer avec vue sur le port. Spécialités: huîtres fraîches, plateaux de fruits de mer.",
      rating: "⭐⭐⭐⭐",
      icon: "🦞"
    },
    {
      position: { lat: 47.2612, lng: -2.3421 },
      title: "La Poissonnerie",
      type: "restaurant",
      description: "Poissons frais et fruits de mer. Menu du jour avec produits locaux.",
      rating: "⭐⭐⭐⭐",
      icon: "🐟"
    },
    {
      position: { lat: 47.2638, lng: -2.3398 },
      title: "Crêperie Ty Breizh",
      type: "restaurant",
      description: "Crêperie bretonne authentique. Galettes au sarrasin et crêpes sucrées.",
      rating: "⭐⭐⭐⭐⭐",
      icon: "🥞"
    },
    {
      position: { lat: 47.2580, lng: -2.3450 },
      title: "Le Café de la Plage",
      type: "restaurant",
      description: "Brasserie face à la mer. Parfait pour un café ou un déjeuner léger.",
      rating: "⭐⭐⭐",
      icon: "☕"
    },
    {
      position: { lat: 47.2655, lng: -2.3412 },
      title: "Marché de Pornichet",
      type: "poi",
      description: "Marché local avec produits frais, légumes, fromages et artisanat. Ouvert mercredi et samedi matin.",
      rating: "🛒",
      icon: "🏪"
    },
    {
      position: { lat: 47.2570, lng: -2.3380 },
      title: "Plage de la Source",
      type: "poi",
      description: "Belle plage de sable fin, idéale pour la baignade et les activités nautiques.",
      rating: "🏖️",
      icon: "🏖️"
    },
    {
      position: { lat: 47.2620, lng: -2.3395 },
      title: "Port de Plaisance",
      type: "poi",
      description: "Port de plaisance avec promenade. Parfait pour une balade en bord de mer.",
      rating: "⛵",
      icon: "⚓"
    },
    {
      position: { lat: 47.2590, lng: -2.3360 },
      title: "L'Océan",
      type: "restaurant",
      description: "Restaurant gastronomique vue mer. Cuisine raffinée avec produits de saison.",
      rating: "⭐⭐⭐⭐⭐",
      icon: "🍷"
    },
    {
      position: { lat: 47.2628, lng: -2.3440 },
      title: "Boulangerie Artisanale",
      type: "poi",
      description: "Boulangerie traditionnelle. Pain frais, viennoiseries et pâtisseries maison.",
      rating: "🥖",
      icon: "🥖"
    },
    {
      position: { lat: 47.2608, lng: -2.3375 },
      title: "La Villa Flornoy",
      type: "restaurant",
      description: "Restaurant élégant dans une villa historique. Cuisine française créative.",
      rating: "⭐⭐⭐⭐",
      icon: "🏛️"
    }
  ];
  
  // Add marker for each location
  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: location.type === 'restaurant' ? '#E8A598' : '#4A90A4',
        fillOpacity: 0.9,
        strokeColor: '#ffffff',
        strokeWeight: 2
      }
    });
    
    // Add click listener to show info window
    marker.addListener('click', () => {
      const contentString = `
        <div style="max-width: 300px; padding: 10px;">
          <h3 style="margin: 0 0 10px 0; color: #2C5F7C; font-size: 1.2rem;">
            ${location.icon} ${location.title}
          </h3>
          <p style="margin: 0 0 8px 0; color: #555; line-height: 1.5;">
            ${location.description}
          </p>
          <p style="margin: 0; font-weight: 500; color: #4A90A4;">
            ${location.rating}
          </p>
        </div>
      `;
      
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    });
  });
  
  // Add legend
  addLegend();
}

// Add a legend to the map
function addLegend() {
  const legend = document.createElement('div');
  legend.style.backgroundColor = 'white';
  legend.style.padding = '10px 15px';
  legend.style.margin = '10px';
  legend.style.borderRadius = '8px';
  legend.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  legend.style.fontFamily = 'Arial, sans-serif';
  legend.style.fontSize = '14px';
  
  legend.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 8px; color: #2C5F7C;">Légende</div>
    <div style="display: flex; align-items: center; margin-bottom: 5px;">
      <span style="display: inline-block; width: 12px; height: 12px; background-color: #E8A598; border-radius: 50%; margin-right: 8px; border: 2px solid white;"></span>
      <span>Restaurants</span>
    </div>
    <div style="display: flex; align-items: center;">
      <span style="display: inline-block; width: 12px; height: 12px; background-color: #4A90A4; border-radius: 50%; margin-right: 8px; border: 2px solid white;"></span>
      <span>Points d'intérêt</span>
    </div>
  `;
  
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
}

// Make initMap available globally for Google Maps callback
window.initMap = initMap;
