# Appartement Pornichet - Fleur de thé 🏖️

A beautiful apartment rental website for a comfortable stay in Pornichet, France - just 10 minutes from the beach!

## About

This website showcases **"Fleur de thé"** (C301), a charming apartment rental located in Pornichet, a seaside resort town in the Loire-Atlantique region of France. The website provides comprehensive information for potential guests about the apartment, residence, local activities, restaurants, and important rules for a pleasant stay.

## Features

- **🏠 Apartment Information**: Detailed information about the apartment amenities and features
- **🏘️ Residence Details**: Information about the residential complex and shared facilities
- **📋 House Rules**: Important guidelines for guests including noise regulations and plant watering etiquette
- **🎨 Activities**: Local activities, attractions, POIs, museums, sports rentals, and sea windmill visits
- **🛒 Equipment**: Nearby commerces and services (shops, bakeries, markets, pharmacies)
- **🍽️ Se nourrir**: Restaurants, bakeries, and markets with interactive Google Maps
- **🗺️ Interactive Map**: Google Maps integration showing recommended restaurants and food locations
- **🌤️ Weather Widget**: Real-time weather for Pornichet using Open-Meteo API displayed in the navigation bar
- **☀️ Weather Page**: Comprehensive weather page with current conditions, 7-day forecast, marine/tide conditions, and additional weather details
- **🌙 Dark Mode**: Toggle between light and dark themes with persistent preference storage
- **📞 Contact**: Easy ways to get in touch with the property owner

## Screenshots

### Homepage
![Homepage Screenshot](screenshots/homepage-screenshot.png)

The homepage welcomes visitors with a beautiful banner featuring Pornichet's beach and marina, along with the tagline "Bienvenue à Pornichet! - Votre séjour confortable à 10 minutes de la plage" (Welcome to Pornichet! - Your comfortable stay 10 minutes from the beach).

### Apartment & Rules Page
![Apartment Rules Screenshot](screenshots/appartement-screenshot.png)

The apartment page provides important information about house rules, including:
- **Noise regulations** (🎵): Guidelines for maintaining a peaceful environment for all residents
- **Plant watering guidelines** (🌿): Best practices for watering plants on balconies and terraces

## Technology Stack

- **HTML5**: Semantic markup for the website structure
- **Bootstrap 5.3.3**: Responsive design framework for mobile-friendly layout
- **CSS3**: Custom styling with `style.css` featuring coastal theme with CSS variables for light/dark modes
- **JavaScript**: Vanilla JavaScript for interactive features
  - Bootstrap's JavaScript bundle for responsive components
  - Custom dark mode toggle (`dark-mode.js`) with localStorage persistence
  - Weather widget integration (`weather.js`)
  - Interactive map functionality (`map.js`, `activities-map.js`)
- **Google Maps JavaScript API**: Interactive map with custom markers and info windows
- **Open-Meteo API**: Free weather data (no API key required)
- **Open-Meteo Marine API**: Ocean/wave conditions and marine data

## How to View

Simply open `index.html` in a web browser to view the website. For development, you can use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then navigate to `http://localhost:8000` in your browser.

### Setting up Google Maps

The interactive map on the Restaurants page requires a Google Maps API key. See [GOOGLE_MAPS_SETUP.md](GOOGLE_MAPS_SETUP.md) for detailed instructions on:
- How to obtain a free Google Maps API key
- How to configure and secure your API key
- How to add it to the website

**Note**: The map will show a placeholder until you add your API key.

## Pages

- **index.html** - Homepage with welcome message and highlights
- **appartement.html** - Apartment details and house rules
- **residence.html** - Information about the residential complex
- **regles.html** - Complete list of rules and regulations
- **activities.html** - Local activities, attractions, POIs, museums, and sports equipment rentals
- **equipement.html** - Commerces and services (shops, bakeries, markets, pharmacies)
- **se-nourrir.html** - Restaurants, bakeries, and markets with interactive Google Maps
- **weather.html** - Detailed weather page with current conditions, 7-day forecast, marine conditions, and additional weather information
- **contact.html** - Contact information

## Branding

The website features the "Fleur de thé" brand with:
- Logo: A blue circular emblem with "Fleur de thé" text
- Apartment identifier: C301
- Tagline: "Appartement terrasse"

## Credits

© 2025 Gastineau Louis | Made with 💖

---

**Location**: Pornichet, Loire-Atlantique, France 🇫🇷
