const apiKey = "c55f146bd9e10bd2d122a21fc8119411";

async function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherInfo").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weatherInfo").innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}
