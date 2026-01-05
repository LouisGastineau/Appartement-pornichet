# Google Maps API Setup Instructions

## Overview
The website now includes an interactive Google Maps feature on the "Restaurants" page (`restaurants.html`) that displays recommended restaurants and points of interest in Pornichet.

## Getting a Google Maps API Key

To use the Google Maps feature, you need to obtain a free API key from Google:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a new project** (or select an existing one)
   - Click "Select a project" at the top
   - Click "New Project"
   - Name it (e.g., "Appartement Pornichet Website")
   - Click "Create"

3. **Enable the Maps JavaScript API**
   - In the left sidebar, go to "APIs & Services" > "Library"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. **Create credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your new API key

5. **Secure your API key** (Recommended)
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your website domains (e.g., `yourwebsite.com/*`, `*.github.io/*`)
   - Under "API restrictions", select "Restrict key"
   - Select only "Maps JavaScript API"
   - Click "Save"

6. **Add the API key to your website**
   - Open `restaurants.html`
   - Find the line: `src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap"`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

## Features

The interactive map includes:

### Restaurants 🍽️
- **Le Belem** - Seafood restaurant with port view
- **La Poissonnerie** - Fresh fish and seafood
- **Crêperie Ty Breizh** - Authentic Breton crêperie
- **Le Café de la Plage** - Beachfront brasserie
- **L'Océan** - Gourmet restaurant with sea view
- **La Villa Flornoy** - Elegant French cuisine

### Points of Interest 🗺️
- **Marché de Pornichet** - Local market (Wed & Sat mornings)
- **Plage de la Source** - Beautiful sandy beach
- **Port de Plaisance** - Marina with waterfront promenade
- **Boulangerie Artisanale** - Traditional bakery

## How to Use

1. Visit the "Restaurants" page on the website
2. Scroll down to the "Carte interactive" section
3. Click on colored markers to see details:
   - 🔴 Pink markers = Restaurants
   - 🔵 Blue markers = Points of interest
4. Each marker shows the name, description, and rating

## Customization

To add or modify locations, edit the `map.js` file:
- Update the `locations` array with new entries
- Each location needs: position (lat/lng), title, type, description, rating, and icon

## Free Tier Limits

Google Maps provides a free tier with:
- $200 monthly credit (enough for ~28,000 map loads per month)
- No credit card required for development
- For production, add billing but won't be charged unless you exceed the free tier

## Troubleshooting

- **Map not loading?** Check that your API key is correctly inserted
- **"This page can't load Google Maps correctly"?** Your API key may be restricted or invalid
- **Want to test locally?** The map works with a simple HTTP server (see main README.md)

## Support

For issues with Google Maps API:
- Documentation: https://developers.google.com/maps/documentation/javascript
- Support: https://developers.google.com/maps/support

---

**Note:** The map feature uses the free Open-Meteo API for weather (no key required) and Google Maps API for the interactive map (key required).
