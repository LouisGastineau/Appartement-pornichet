// Google Maps implementation for Pornichet activities and attractions
// Center coordinates for Pornichet, France: 47.26°N, -2.34°W

let activitiesMap;
let activitiesInfoWindow;

// Initialize the activities map
function initActivitiesMap() {
  // Center on Pornichet
  const pornichet = { lat: 47.26, lng: -2.34 };
  
  // Create the map
  activitiesMap = new google.maps.Map(document.getElementById("activities-map"), {
    zoom: 13,
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
  activitiesInfoWindow = new google.maps.InfoWindow();
  
  // Add markers for activity locations
  addActivityLocations();
}

// Add markers for beaches, attractions, and points of interest
function addActivityLocations() {
  const locations = [
    {
      position: { lat: 47.2580, lng: -2.3450 },
      title: "Plage de la Source",
      type: "beach",
      description: "Belle plage de sable fin, idéale pour la baignade et les sports nautiques. Baignade surveillée en été.",
      icon: "🏖️"
    },
    {
      position: { lat: 47.2595, lng: -2.3385 },
      title: "Port de Plaisance",
      type: "poi",
      description: "Marina avec promenade en bord de mer. Parfait pour une balade romantique et observer les bateaux.",
      icon: "⛵"
    },
    {
      position: { lat: 47.2638, lng: -2.3398 },
      title: "Plage Bonne Source",
      type: "beach",
      description: "Plage familiale avec club de plage pour enfants en saison estivale.",
      icon: "🏖️"
    },
    {
      position: { lat: 47.2655, lng: -2.3412 },
      title: "Marché de Pornichet",
      type: "poi",
      description: "Marché local avec produits frais et artisanat. Ouvert mercredi et samedi matin.",
      icon: "🛒"
    },
    {
      position: { lat: 47.2612, lng: -2.3421 },
      title: "Centre de location nautique",
      type: "activity",
      description: "Location de kayaks, stand-up paddle, planches à voile. Cours disponibles pour débutants.",
      icon: "🏄"
    },
    {
      position: { lat: 47.2608, lng: -2.3375 },
      title: "Sentier côtier",
      type: "activity",
      description: "Point de départ du sentier côtier. Idéal pour randonnées et vélo avec vue sur l'océan.",
      icon: "🚶"
    },
    {
      position: { lat: 47.2520, lng: -2.3280 },
      title: "Golf de Pornichet",
      type: "activity",
      description: "Golf 18 trous avec vue sur mer. Restaurant sur place. Réservation recommandée.",
      icon: "⛳"
    },
    {
      position: { lat: 47.2590, lng: -2.3360 },
      title: "Club de voile",
      type: "activity",
      description: "École de voile proposant cours et stages pour tous niveaux. Location de matériel.",
      icon: "⛵"
    },
    {
      position: { lat: 47.2710, lng: -2.3890 },
      title: "Parc naturel régional de Brière",
      type: "poi",
      description: "Nature préservée à quelques kilomètres. Balades en barque, observation d'oiseaux, découverte de la faune et flore.",
      icon: "🦆"
    },
    {
      position: { lat: 47.2850, lng: -2.3920 },
      title: "La Baule - Casino",
      type: "poi",
      description: "Station balnéaire voisine avec casino, restaurants gastronomiques et boutiques de luxe.",
      icon: "🎰"
    },
    {
      position: { lat: 47.2628, lng: -2.3440 },
      title: "Location de vélos",
      type: "activity",
      description: "Location de vélos et VTT pour explorer la région. Pistes cyclables le long de la côte.",
      icon: "🚲"
    },
    {
      position: { lat: 47.2760, lng: -2.2100 },
      title: "Éoliennes marines de Saint-Nazaire",
      type: "poi",
      description: "Parc éolien offshore visible depuis la côte. Visite guidée possible - expérience unique.",
      icon: "💨"
    },
    {
      position: { lat: 47.2605, lng: -2.3405 },
      title: "Escoublac - Patrimoine",
      type: "poi",
      description: "Quartier historique avec architecture remarquable. Visite guidée du patrimoine local.",
      icon: "🏛️"
    },
    {
      position: { lat: 47.2645, lng: -2.3365 },
      title: "Centre de plongée",
      type: "activity",
      description: "Baptême de plongée et exploration des fonds marins. Équipement fourni, encadrement professionnel.",
      icon: "🤿"
    }
  ];
  
  // Add marker for each location with staggered animation
  locations.forEach((location, index) => {
    // Stagger marker drops for better visual effect
    setTimeout(() => {
      // Choose marker color based on type
      let markerColor;
      switch(location.type) {
        case 'beach':
          markerColor = '#4FC3F7'; // Light blue for beaches
          break;
        case 'activity':
          markerColor = '#66BB6A'; // Green for activities
          break;
        case 'poi':
          markerColor = '#FFA726'; // Orange for points of interest
          break;
        default:
          markerColor = '#E8A598'; // Default coral color
      }
      
      const marker = new google.maps.Marker({
        position: location.position,
        map: activitiesMap,
        title: location.title,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: markerColor,
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
            <p style="margin: 0; color: #555; line-height: 1.5;">
              ${location.description}
            </p>
          </div>
        `;
        
        activitiesInfoWindow.setContent(contentString);
        activitiesInfoWindow.open(activitiesMap, marker);
      });
    }, index * 80); // 80ms delay between each marker
  });
}

// Make initActivitiesMap available globally for Google Maps callback
window.initActivitiesMap = initActivitiesMap;
