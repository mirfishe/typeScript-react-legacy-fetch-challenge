import React, {FunctionComponent} from 'react';

type AcceptedProps = {
    // weatherMain: {},
    // weatherWeather: string[],
    weatherData: {},
    testProp: string,
};

const Weather: FunctionComponent <(AcceptedProps)> = props => {

    // console.log('props.weatherMain', props.weatherMain);
    // console.log('props.weatherWeather', props.weatherWeather);
    console.log('props.weatherData', props.weatherData);

    return(
        <div>
            <h1>Weather</h1>
            <p>{props.testProp}</p>
            <pre>{JSON.stringify(props.weatherData, null, 2)}</pre>
        </div>
    );

};


export default Weather;
