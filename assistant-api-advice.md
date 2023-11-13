# Integration of OpenAI Assistant with Weather API

This document outlines how to integrate OpenAI's Assistant API with a weather fetching function, `get_current_weather`, to respond to user queries about the current weather in multiple locations.

## Overview

The integration involves the Assistant API serving as the user interface, receiving weather-related requests, and the `get_current_weather` function acting as a service to fetch weather data.

## Process

1. **User Input**: User sends a request for current weather in specific locations.
2. **Assistant Processes Request**: Assistant API interprets the request for weather data.
3. **Function Call**: Assistant calls `get_current_weather` for each location.
4. **Fetching Data**: The function retrieves weather data from the weather service.
5. **Response to User**: Assistant compiles and sends back the weather information.

## Example Implementation

Here's an example using Express.js and the OpenAI API:

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const openai = require("openai-api");

// Initialize Express and middleware
const app = express();
app.use(bodyParser.json());

// OpenAI API key
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";
const ai = new openai(OPENAI_API_KEY);

// The get_current_weather function (defined separately)

// Endpoint to receive weather requests
app.post("/weather", async (req, res) => {
  try {
    const userQuery = req.body.question;
    const gptResponse = await ai.complete({
      prompt: userQuery,
      maxTokens: 60,
    });

    // Parse locations from Assistant's response
    const locations = parseLocationsFromResponse(
      gptResponse.data.choices[0].text
    );

    // Fetch weather for each location
    const weatherPromises = locations.map((location) =>
      get_current_weather(location)
    );
    const weatherResults = await Promise.all(weatherPromises);

    res.json(weatherResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing request");
  }
});

// Function to parse locations
function parseLocationsFromResponse(responseText) {
  // Logic to extract locations
  return responseText.split(", "); // Simple example
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
