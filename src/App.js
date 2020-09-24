import React from 'react';
import './App.css';
import Location from './components/Location';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("p", null, "Using typescript, create a class component and a functional component. The class component should reach out to the Geolocation\u00A0API\u00A0https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API to grab your coordinates. Then using those coordinates, reach out to the Open Weather API\u00A0https://openweathermap.org/ and retrieve the weather information for your area.\u00A0 Once you have the weather, it should be sent to the functional component to be displayed."),
        React.createElement(Location, null)));
}
export default App;
