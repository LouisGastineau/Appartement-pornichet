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
    
    // Update the weather display with clickable link
    weatherElement.innerHTML = `
      <a href="weather.html" class="weather-link">
        <span class="weather-icon">${weatherIcon}</span>
        <span class="weather-temp">${temperature}°C</span>
      </a>
    `;
    weatherElement.classList.add('weather-loaded');
    
  } catch (error) {
    console.error('Error fetching weather:', error);
    weatherElement.innerHTML = `
      <a href="weather.html" class="weather-link">
        <span class="weather-icon"><i class="fas fa-cloud-sun weather-condition-partly-cloudy" aria-hidden="true"></i></span>
      </a>
    `;
    weatherElement.classList.add('weather-loaded');
  }
}

// Convert WMO weather codes to Font Awesome icons
// Reference: https://open-meteo.com/en/docs
function getWeatherIcon(code) {
  const weatherCodes = {
    0: '<i class="fas fa-sun weather-condition-sun" aria-hidden="true"></i>',           // Clear sky
    1: '<i class="fas fa-cloud-sun weather-condition-partly-cloudy" aria-hidden="true"></i>',     // Mainly clear
    2: '<i class="fas fa-cloud-sun weather-condition-partly-cloudy" aria-hidden="true"></i>',     // Partly cloudy
    3: '<i class="fas fa-cloud weather-condition-cloud" aria-hidden="true"></i>',         // Overcast
    45: '<i class="fas fa-smog weather-condition-cloud" aria-hidden="true"></i>',         // Fog
    48: '<i class="fas fa-smog weather-condition-cloud" aria-hidden="true"></i>',         // Depositing rime fog
    51: '<i class="fas fa-cloud-sun-rain weather-condition-rain" aria-hidden="true"></i>', // Drizzle: Light
    53: '<i class="fas fa-cloud-sun-rain weather-condition-rain" aria-hidden="true"></i>', // Drizzle: Moderate
    55: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Drizzle: Dense
    61: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Rain: Slight
    63: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Rain: Moderate
    65: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Rain: Heavy
    71: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow fall: Slight
    73: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow fall: Moderate
    75: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow fall: Heavy
    77: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow grains
    80: '<i class="fas fa-cloud-sun-rain weather-condition-rain" aria-hidden="true"></i>', // Rain showers: Slight
    81: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Rain showers: Moderate
    82: '<i class="fas fa-cloud-showers-heavy weather-condition-rain" aria-hidden="true"></i>', // Rain showers: Violent
    85: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow showers: Slight
    86: '<i class="fas fa-snowflake weather-condition-snow" aria-hidden="true"></i>',    // Snow showers: Heavy
    95: '<i class="fas fa-bolt weather-condition-storm" aria-hidden="true"></i>',         // Thunderstorm
    96: '<i class="fas fa-bolt weather-condition-storm" aria-hidden="true"></i>',         // Thunderstorm with slight hail
    99: '<i class="fas fa-bolt weather-condition-storm" aria-hidden="true"></i>'          // Thunderstorm with heavy hail
  };
  
  return weatherCodes[code] || '<i class="fas fa-cloud-sun weather-condition-partly-cloudy" aria-hidden="true"></i>';
}

// Load weather when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchWeather);
} else {
  fetchWeather();
}
