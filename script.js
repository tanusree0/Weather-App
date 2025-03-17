const apiKey = "c55f146bd9e10bd2d122a21fc8119411"; // Your working API key

async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (response.ok) {
            document.getElementById("weatherInfo").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
                <p><strong>Condition:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weatherInfo").innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}
