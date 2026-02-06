// Leaflet map initialization for Activities page
// Displays points of interest, beaches, and activities in Pornichet area
document.addEventListener('DOMContentLoaded', function() {
  // Check if map element exists
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  // Initialize map centered on Pornichet
  const map = L.map('map').setView([47.25, -2.35], 11);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Points of interest with coordinates and descriptions
  const points = [
    { coords: [47.257478, -2.3246763], popup: "Escape Yourself Pornichet" },
    { coords: [47.2700391, -2.3449575], popup: "Les Secrets de Pornichet Tour" },
    { coords: [47.263681, -2.3312668], popup: "Parc paysager de Pornichet" },
    { coords: [47.2562141, -2.3406026], popup: "Pointe du Bec coastal viewpoint" },
    { coords: [47.259761999999995, -2.330285], popup: "Racing Society of Côte d'Amour (Hippodrome)" },
    { coords: [47.267091799999996, -2.346775], popup: "Casino Pornichet" },
    { coords: [47.2631619, -2.3406694], popup: "Minigolf Pornichet" },
    { coords: [47.265717099999996, -2.34591], popup: "Club de plage Les Dauphins" },
    { coords: [47.258036, -2.346192], popup: "Yacht Club Apcc Voile Sportive (sailing)" },
    { coords: [47.258480999999996, -2.3262075], popup: "Pornichet Badminton Club (PBC)" },
    { coords: [47.2564297, -2.3345591], popup: "ESPornichet Football Club" },
    { coords: [47.2579303, -2.3167215], popup: "Starfit Gym" },
    { coords: [47.2653004, -2.3440763], popup: "Club Fitnéo Pornichet" },
    { coords: [47.2573756, -2.3337773], popup: "Entente Sportive Pornichet Basketball" },
    { coords: [47.2596774, -2.3394078], popup: "Pornichet Office de Tourisme (info & events)" },
    { coords: [47.2472784, -2.3234954], popup: "Plage de Bonne-Source beach" },
    { coords: [47.247358999999996, -2.325667], popup: "Plage des Libraires beach" },
    { coords: [47.2643683, -2.3452116], popup: "Plage de Sainte-Marguerite beach" },
    { coords: [47.2431065, -2.3173756], popup: "La Pointe De Congrigoux viewpoint" }
  ];
  
  // Add markers for each point of interest
  points.forEach(point => {
    L.marker(point.coords)
      .addTo(map)
      .bindPopup(point.popup);
  });
});
