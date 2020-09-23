import React from 'react';
import './App.css';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <p>Using typescript, create a class component and a functional component. The class component should reach out to the Geolocation API https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API to grab your coordinates. Then using those coordinates, reach out to the Open Weather API https://openweathermap.org/ and retrieve the weather information for your area.  Once you have the weather, it should be sent to the functional component to be displayed.</p>
      <Location />
    </div>
  );
}

export default App;
