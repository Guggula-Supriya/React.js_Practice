import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = () => {
      axios
        .get("https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true")
        .then(res => setWeather(res.data.current_weather))
        .catch(err => console.log(err));
    };

    fetchWeather(); // first load immediately

    const intervalId = setInterval(fetchWeather, 30000); // update every 30 sec

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  if (!weather) return <h2>Loading weather...</h2>;

  return (
    <div>
      <h1>Weather</h1>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Weather;
