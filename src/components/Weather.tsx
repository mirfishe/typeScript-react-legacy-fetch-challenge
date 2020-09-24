import React, {FunctionComponent} from 'react';

type AcceptedProps = {
    // weatherMain: {},
    // weatherWeather: string[],
    // weatherData: {},
    weatherData: any,
    name: string,
    currently: string,
    temperatureFahrenheit: string,
    temperatureCelsius: string,
    humidity:  string,
    pressure: string,
    windSpeed: string
};

const Weather: FunctionComponent <(AcceptedProps)> = props => {

    // console.log('props.weatherMain', props.weatherMain);
    // console.log('props.weatherWeather', props.weatherWeather);
    // console.log('props.weatherData', props.weatherData);

    return(
        <div>
            <h1>Weather</h1>

            <h4>{props.name}</h4> 
            <p><strong>Currently</strong> {props.currently}</p>
            <h5>Temperature</h5>
            <p>{props.temperatureFahrenheit}&#176; Fahrenheit</p>
            <p>{props.temperatureCelsius}&#176; Celsius</p>
            <h5>Humidity</h5>
            <p> {props.humidity}%</p>
            <h5>Atmospheric Pressure</h5>
            <p> {props.pressure} in</p>
            <h5>Wind Speed</h5>
            <p>{props.windSpeed} mph</p>


            {/* <h4>{props.weatherData["name"]}</h4>
            <p><strong>Currently</strong> {props.weatherData.weather[0].main}</p>
            <h5>Temperature</h5>
            <p>{Math.floor(((props.weatherData.main.temp-273.15)*1.8)+32)}&#176; Fahrenheit</p>
            <p>{Math.floor(props.weatherData.main.temp-273.15)}&#176; Celsius</p>
            <h5>Humidity</h5>
            <p> {props.weatherData.main.humidity}%</p>
            <h5>Atmospheric Pressure</h5>
            <p> {(props.weatherData.main.pressure * 0.030).toPrecision(4)} in</p>
            <h5>Wind Speed</h5>
            <p>{(props.weatherData.wind.speed * 2.23694).toPrecision(2)} mph</p> */}

            {/* <pre>{JSON.stringify(props.weatherData, null, 2)}</pre> */}
        </div>
    );

};


export default Weather;
