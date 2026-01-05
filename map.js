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

// Add markers for recommended restaurants and food-related locations
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
      position: { lat: 47.2590, lng: -2.3360 },
      title: "L'Océan",
      type: "restaurant",
      description: "Restaurant gastronomique vue mer. Cuisine raffinée avec produits de saison.",
      rating: "⭐⭐⭐⭐⭐",
      icon: "🍷"
    },
    {
      position: { lat: 47.2608, lng: -2.3375 },
      title: "La Villa Flornoy",
      type: "restaurant",
      description: "Restaurant élégant dans une villa historique. Cuisine française créative.",
      rating: "⭐⭐⭐⭐",
      icon: "🏛️"
    },
    {
      position: { lat: 47.2655, lng: -2.3412 },
      title: "Marché de Pornichet",
      type: "food",
      description: "Marché local avec produits frais, légumes, fromages et artisanat. Ouvert mercredi et samedi matin.",
      rating: "🛒",
      icon: "🏪"
    },
    {
      position: { lat: 47.2628, lng: -2.3440 },
      title: "Boulangerie Artisanale",
      type: "food",
      description: "Boulangerie traditionnelle. Pain frais, viennoiseries et pâtisseries maison.",
      rating: "🥖",
      icon: "🥖"
    }
  ];
  
  // Add marker for each location with staggered animation
  locations.forEach((location, index) => {
    // Stagger marker drops for better visual effect
    setTimeout(() => {
      const marker = new google.maps.Marker({
        position: location.position,
        map: map,
        title: location.title,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#E8A598',
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
    }, index * 80); // 80ms delay between each marker
  });
}

// Make initMap available globally for Google Maps callback
window.initMap = initMap;
