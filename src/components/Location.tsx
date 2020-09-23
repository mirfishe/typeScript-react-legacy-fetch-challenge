import React, {Component} from 'react';
import Weather from "./Weather";

type testProps = {

};

type testState = {
    latitude: number | undefined | null,
    longitude: number | undefined | null,
    // weatherMain: {},
    // weatherWeather: string[],
    weatherData: {}
};

let testProp: string = 'Am I getting passed to the Clock component?'

class Location extends Component<(testProps), testState> {

    constructor(props: testProps) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            // weatherMain: {},
            // weatherWeather: [],
            weatherData: {}
        };

        this.getWeather = this.getWeather.bind(this);

    };

    getWeather = () => {

        // https://stackoverflow.com/questions/44523030/cannot-read-property-setstate-of-undefined-with-fetch-api
        let self = this;

        // https://cors-anywhere.herokuapp.com
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        // const proxyURL:string = 'https://cors-anywhere.herokuapp.com/';

        const baseURL:string = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY:string | undefined | null = process.env.REACT_APP_API_KEY;

        // let latitude:number;
        // let longitude:number;

        if ("geolocation" in navigator) {
          console.log("Available");

          navigator.geolocation.getCurrentPosition(function(position) {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
            // console.log(position);

            // latitude = position.coords.latitude;
            // longitude = position.coords.longitude;
            self.setState({latitude: position.coords.latitude});
            self.setState({longitude: position.coords.longitude});
            // console.log('self.state.latitude', self.state.latitude);
            // console.log('self.state.longitude', self.state.longitude);

            const URL = baseURL + "?lat=" + self.state.latitude + "&lon=" + self.state.longitude + "&appid=" + API_KEY;

            console.log('URL', URL);


            fetch(URL)
            .then (response => {
                // console.log('response', response);
                return response.json();
            })
            .then (json => {
                // console.log('json', json);
                // self.setState({weatherMain: json.main});
                // self.setState({weatherWeather: json.weather});
                self.setState({weatherData: json});
            })
            // .then (test => {
            //     console.log('self.state.weatherMain', self.state.weatherMain);
            //     console.log('self.state.weatherWeather', self.state.weatherWeather);
            //     console.log('self.state.weatherData', self.state.weatherData);
            // })
            .catch(err => {
                console.log(err);
                // this.setState({errForm: err});
            })
        });

        } else {
          console.log("Not Available");
        };
        
    };

    componentDidMount() {

        this.getWeather();

      };


    render() {

        return(
            <div>
                {this.state.weatherData.hasOwnProperty('weather')  ? <Weather /*weatherMain={this.state.weatherMain} weatherWeather={this.state.weatherWeather}*/ weatherData={this.state.weatherData} testProp={testProp} /> : ""}
            </div>
        );
    };
};

export default Location;