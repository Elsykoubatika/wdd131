
// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Format the last modified date
const formattedLastModified = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

// Insert the current year into the first paragraph of the footer
document.getElementById("currentyear").textContent = `${currentYear}`;

// Insert the last modified date into the second paragraph of the footer
document.getElementById("lastModified").textContent = `Last modified: ${formattedLastModified}`;



// Wind chill calculation function
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Fetch weather data from OpenWeatherMap API
fetch('http://api.openweathermap.org/geo/1.0/direct?q=Brazzaville&limit=5&appid=47ec60f4a5bd529d935d6f7e00b14fd9')
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;

            // Fetch weather details using latitude and longitude
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=47ec60f4a5bd529d935d6f7e00b14fd9`;
            return fetch(weatherApiUrl);
        } else {
            throw new Error('Location not found');
        }
    })
    .then(response => response.json())
    .then(weatherData => {
        const temperature = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed
        const conditions = weatherData.weather[0].description;

        // Update temperature and wind speed in the DOM
        document.getElementById("temperature").textContent = ` ${temperature}°C`;
        document.getElementById("wind-speed").textContent = `${(windSpeed * 3.6).toFixed(2)} km/h`; // Convert m/s to km/h
        // Update weather conditions in the DOM
        document.getElementById("conditions").textContent = conditions;

        // Calculate and update wind chill
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("wind").textContent = `${windChill.toFixed(2)}°C`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });