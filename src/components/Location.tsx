import React, {Component} from 'react';
import Weather from "./Weather";

type testState = {
    latitude: number | undefined | null,
    longitude: number | undefined | null,
    // weatherMain: {},
    // weatherWeather: string[],
    // weatherData: {},
    weatherData: any,
    name: string,
    currently: string,
    temperatureFahrenheit:  string,
    temperatureCelsius:  string,
    humidity:  string,
    pressure: string,
    windSpeed: string,
    statusLocation: string,
    errWeather: string
};

class Location extends Component<({}), testState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            // weatherMain: {},
            // weatherWeather: [],
            weatherData: {},
            name: "",
            currently: "",
            temperatureFahrenheit: "",
            temperatureCelsius: "",
            humidity: "",
            pressure: "",
            windSpeed: "",
            statusLocation: "",
            errWeather: ""
        };

        this.getWeather = this.getWeather.bind(this);

    };

    getWeather = () => {

        // https://stackoverflow.com/questions/44523030/cannot-read-property-setstate-of-undefined-with-fetch-api
        let self = this;

        const baseURL:string = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY:string | undefined | null = process.env.REACT_APP_API_KEY;

        // let latitude:number;
        // let longitude:number;

        if ("geolocation" in navigator) {
          // console.log("Location Available");
          self.setState({statusLocation: "Location Available"});

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

            // console.log('URL', URL);


            fetch(URL)
            .then (response => {
                // console.log('response', response);
                return response.json();
            })
            .then (json => {
                // console.log('json', json);
                // self.setState({weatherMain: json.main});
                // self.setState({weatherWeather: json.weather});
                self.setState({statusLocation: ""});
                self.setState({weatherData: json});
                self.setState({name: json.name});
                self.setState({currently: json.weather[0].main});
                self.setState({temperatureFahrenheit: Math.floor(((json.main.temp-273.15)*1.8)+32).toString()});
                self.setState({temperatureCelsius: Math.floor(json.main.temp-273.15).toString()});
                self.setState({humidity: json.main.humidity});
                self.setState({pressure: (json.main.pressure * 0.030).toPrecision(4)});
                self.setState({windSpeed: (json.wind.speed * 2.23694).toPrecision(2)});
            })
            // .then (test => {
            //     console.log('self.state.weatherMain', self.state.weatherMain);
            //     console.log('self.state.weatherWeather', self.state.weatherWeather);
            //     console.log('self.state.weatherData', self.state.weatherData);
            // })
            .catch(err => {
                console.log(err);
                self.setState({errWeather: err});
            })
        });

        } else {
          console.log("Location Not Available");
          self.setState({errWeather: "Location Not Available"});
        };
        
    };

    componentDidMount() {

        this.getWeather();

      };


    render() {

        return(
            <div>
                {this.state.errWeather !== "" ? this.state.errWeather : ""}
                {this.state.statusLocation !== "" ? this.state.statusLocation : ""}
                {this.state.weatherData.hasOwnProperty('weather')  ? <Weather /*weatherMain={this.state.weatherMain} weatherWeather={this.state.weatherWeather}*/ weatherData={this.state.weatherData} name={this.state.name} currently={this.state.currently} temperatureFahrenheit={this.state.temperatureFahrenheit} temperatureCelsius={this.state.temperatureCelsius} humidity={this.state.humidity} pressure={this.state.pressure} windSpeed={this.state.windSpeed} /> : ""}
            </div>
        );
    };
};

export default Location;