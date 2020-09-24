import React from 'react';
var Weather = function (props) {
    // console.log('props.weatherMain', props.weatherMain);
    // console.log('props.weatherWeather', props.weatherWeather);
    // console.log('props.weatherData', props.weatherData);
    return (React.createElement("div", null,
        React.createElement("h1", null, "Weather"),
        React.createElement("h4", null, props.name),
        React.createElement("p", null,
            React.createElement("strong", null, "Currently"),
            " ",
            props.currently),
        React.createElement("h5", null, "Temperature"),
        React.createElement("p", null,
            props.temperatureFahrenheit,
            "\u00B0 Fahrenheit"),
        React.createElement("p", null,
            props.temperatureCelsius,
            "\u00B0 Celsius"),
        React.createElement("h5", null, "Humidity"),
        React.createElement("p", null,
            " ",
            props.humidity,
            "%"),
        React.createElement("h5", null, "Atmospheric Pressure"),
        React.createElement("p", null,
            " ",
            props.pressure,
            " in"),
        React.createElement("h5", null, "Wind Speed"),
        React.createElement("p", null,
            props.windSpeed,
            " mph")));
};
export default Weather;
