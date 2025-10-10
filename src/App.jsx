import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
 // replace with OpenWeather key
  


  const fetchWeather = async () => {
    if (!city){
      alert("enter city name")
      return;
    };
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌦 Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            fetchWeather();
          }
        }}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && weather.main && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temp: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
