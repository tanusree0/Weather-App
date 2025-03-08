
document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const location = document.getElementById('location').value;
    if (location === "") {
      alert("Please enter a location.");
      return;
    }
  
    const apiKey = "07403c9fdc604acaad171941250803";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert("Location not found. Please try again.");
        } else {
          const locationName = `${data.location.name}, ${data.location.country}`;
          const temperature = data.current.temp_c;
          const condition = data.current.condition.text;
  
          // Update the HTML with location, temperature, and condition
          document.getElementById('locationName').textContent = locationName;
          document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
          document.getElementById('condition').textContent = `Condition: ${condition}`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('An error occurred. Please try again later.');
      });
  });
  