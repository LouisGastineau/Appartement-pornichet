# Google Maps Integration

## Overview
The website includes an interactive Google My Maps on two pages:
- **Activities page** (`activities.html`) - displays places to visit, beaches, and activities
- **Restaurants page** (`se-nourrir.html`) - displays recommended restaurants and food establishments

## Implementation

The website uses **Google My Maps** embedded via iframe, which does not require an API key. The custom map (ID: `1ioaDGhawy4NhwuZhTiBnBqKJmnYDo30`) is shared publicly and embedded directly into the pages.

### Benefits of Google My Maps:
- **No API key required** - works immediately without setup
- **Easy to update** - edit the map in Google My Maps and changes appear automatically
- **Collaborative** - multiple people can edit the map
- **User-friendly** - familiar Google Maps interface
- **No usage limits** - free for unlimited page views

### Embed Code:
```html
<iframe 
  src="https://www.google.com/maps/d/embed?mid=1ioaDGhawy4NhwuZhTiBnBqKJmnYDo30" 
  width="100%" 
  height="500"
  style="border:0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Editing the Map

To update the locations and information displayed on the map:

1. **Open the map in edit mode**
   - Visit: https://www.google.com/maps/d/edit?mid=1ioaDGhawy4NhwuZhTiBnBqKJmnYDo30
   - Sign in with the Google account that has edit access

2. **Make your changes**
   - Add new markers by clicking the marker icon
   - Edit existing markers by clicking on them
   - Organize markers into layers (e.g., Restaurants, Activities, Beaches)
   - Add descriptions, photos, and links to each location

3. **Save your changes**
   - Changes are saved automatically
   - The embedded map on the website updates immediately

4. **Share access** (if needed)
   - Click "Share" in the map editor
   - Add collaborators by email address

## Features

The map includes locations organized by category:

### Activities Page (`activities.html`)
- **Beaches** - Sandy beaches with facilities
- **Water sports** - Sailing, paddle boarding, kayaking
- **Points of interest** - Marina, markets, golf courses
- **Cultural sites** - Museums, historic areas
- **Nature** - Coastal paths, regional parks

### Restaurants Page (`se-nourrir.html`)
- **Restaurants** - Seafood, French cuisine, crêperies
- **Bakeries** - Traditional boulangeries and pâtisseries
- **Markets** - Local produce and artisan goods
- **Cafés** - Beachfront cafés and bistros

## How to Use

1. Visit the "Activités" or "Se restaurer" pages
2. Scroll to the map section
3. Click on markers to see location details
4. Use zoom controls to explore the area
5. Click on location names in the map sidebar to jump to specific places
6. Use the layer toggle (if available) to show/hide categories

## Customization

The map can be customized by editing it in Google My Maps:

### Adding Locations:
1. Open the map in edit mode (link above)
2. Click "Add marker" button
3. Place marker on the map
4. Add title, description, and photos
5. Choose the appropriate layer (category)

### Styling Markers:
- Use custom icons for different categories
- Apply different colors to layers
- Add photos to make locations more attractive

### Organizing Layers:
- Create separate layers for different types of locations
- Name layers clearly (e.g., "Restaurants", "Plages", "Activités")
- Users can toggle layers on/off in the embedded map

## Technical Details

- **No JavaScript required** - Simple iframe embed
- **No API key required** - Completely free
- **Responsive design** - Works on mobile, tablet, and desktop
- **Fast loading** - Uses `loading="lazy"` for better performance
- **Works offline-compatible** - Once loaded, basic functionality remains
- **Cross-browser compatible** - Works in all modern browsers

## Troubleshooting

- **Map not loading?** Check your internet connection
- **Map appears empty?** The custom map may have been deleted or made private
- **Cannot edit map?** You need edit permissions on the Google My Maps
- **Want to test locally?** The map works with a simple HTTP server (see main README.md)

## Support

For issues with Google My Maps:
- Documentation: https://support.google.com/mymaps
- Create or edit maps: https://www.google.com/mymaps

---

**Note:** The weather widget uses the free Open-Meteo API (no key required) and the maps use Google My Maps (also no key required).
