// Weather API for Pornichet using Open-Meteo (free, no API key required)
// Coordinates for Pornichet, France: 47.26°N, -2.34°W

async function fetchWeather() {
  const weatherElement = document.getElementById('weather-display');
  
  try {
    // Open-Meteo API call for Pornichet coordinates
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=47.26&longitude=-2.34&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FParis'
    );
    
    if (!response.ok) {
      throw new Error('Weather data unavailable');
    }
    
    const data = await response.json();
    const current = data.current;
    
    // Get weather icon based on WMO weather code
    const weatherIcon = getWeatherIcon(current.weather_code);
    const temperature = Math.round(current.temperature_2m);
    
    // Update the weather display
    weatherElement.innerHTML = `
      <span class="weather-icon">${weatherIcon}</span>
      <span class="weather-temp">${temperature}°C</span>
      <span class="weather-location d-none d-md-inline">Pornichet</span>
    `;
    weatherElement.classList.add('weather-loaded');
    
  } catch (error) {
    console.error('Error fetching weather:', error);
    weatherElement.innerHTML = `
      <span class="weather-icon">🌤️</span>
      <span class="weather-temp d-none d-md-inline">Pornichet</span>
    `;
    weatherElement.classList.add('weather-loaded');
  }
}

// Convert WMO weather codes to emojis
// Reference: https://open-meteo.com/en/docs
function getWeatherIcon(code) {
  const weatherCodes = {
    0: '☀️',    // Clear sky
    1: '🌤️',   // Mainly clear
    2: '⛅',   // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️',  // Fog
    48: '🌫️',  // Depositing rime fog
    51: '🌦️',  // Drizzle: Light
    53: '🌦️',  // Drizzle: Moderate
    55: '🌧️',  // Drizzle: Dense
    61: '🌧️',  // Rain: Slight
    63: '🌧️',  // Rain: Moderate
    65: '🌧️',  // Rain: Heavy
    71: '🌨️',  // Snow fall: Slight
    73: '🌨️',  // Snow fall: Moderate
    75: '🌨️',  // Snow fall: Heavy
    77: '❄️',   // Snow grains
    80: '🌦️',  // Rain showers: Slight
    81: '🌧️',  // Rain showers: Moderate
    82: '🌧️',  // Rain showers: Violent
    85: '🌨️',  // Snow showers: Slight
    86: '🌨️',  // Snow showers: Heavy
    95: '⛈️',   // Thunderstorm
    96: '⛈️',   // Thunderstorm with slight hail
    99: '⛈️'    // Thunderstorm with heavy hail
  };
  
  return weatherCodes[code] || '🌤️';
}

// Load weather when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchWeather);
} else {
  fetchWeather();
}
