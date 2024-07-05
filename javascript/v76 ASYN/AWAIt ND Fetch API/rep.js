const express = require("express");
const app = express();
const axios = require("axios");

app.get("/weather", async (req, res) => {
  const { country, city } = req.query;
  const apiKey = "574423ae906e83801c3f6beade95e65a"; // Replace with your actual OpenWeatherMap API key
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(9000, () => {
  console.log("Weather API listening on port 9000");
});
