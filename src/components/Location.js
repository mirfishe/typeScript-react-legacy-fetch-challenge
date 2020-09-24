var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import Weather from "./Weather";
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location(props) {
        var _this = _super.call(this, props) || this;
        _this.getWeather = function () {
            // https://stackoverflow.com/questions/44523030/cannot-read-property-setstate-of-undefined-with-fetch-api
            var self = _this;
            var baseURL = "https://api.openweathermap.org/data/2.5/weather";
            var API_KEY = process.env.REACT_APP_API_KEY;
            // let latitude:number;
            // let longitude:number;
            if ("geolocation" in navigator) {
                // console.log("Location Available");
                self.setState({ statusLocation: "Location Available" });
                navigator.geolocation.getCurrentPosition(function (position) {
                    // console.log("Latitude is :", position.coords.latitude);
                    // console.log("Longitude is :", position.coords.longitude);
                    // console.log(position);
                    // latitude = position.coords.latitude;
                    // longitude = position.coords.longitude;
                    self.setState({ latitude: position.coords.latitude });
                    self.setState({ longitude: position.coords.longitude });
                    // console.log('self.state.latitude', self.state.latitude);
                    // console.log('self.state.longitude', self.state.longitude);
                    var URL = baseURL + "?lat=" + self.state.latitude + "&lon=" + self.state.longitude + "&appid=" + API_KEY;
                    // console.log('URL', URL);
                    fetch(URL)
                        .then(function (response) {
                        // console.log('response', response);
                        return response.json();
                    })
                        .then(function (json) {
                        // console.log('json', json);
                        // self.setState({weatherMain: json.main});
                        // self.setState({weatherWeather: json.weather});
                        self.setState({ statusLocation: "" });
                        self.setState({ weatherData: json });
                        self.setState({ name: json.name });
                        self.setState({ currently: json.weather[0].main });
                        self.setState({ temperatureFahrenheit: Math.floor(((json.main.temp - 273.15) * 1.8) + 32).toString() });
                        self.setState({ temperatureCelsius: Math.floor(json.main.temp - 273.15).toString() });
                        self.setState({ humidity: json.main.humidity });
                        self.setState({ pressure: (json.main.pressure * 0.030).toPrecision(4) });
                        self.setState({ windSpeed: (json.wind.speed * 2.23694).toPrecision(2) });
                    })
                        // .then (test => {
                        //     console.log('self.state.weatherMain', self.state.weatherMain);
                        //     console.log('self.state.weatherWeather', self.state.weatherWeather);
                        //     console.log('self.state.weatherData', self.state.weatherData);
                        // })
                        .catch(function (err) {
                        console.log(err);
                        self.setState({ errWeather: err });
                    });
                });
            }
            else {
                console.log("Location Not Available");
                self.setState({ errWeather: "Location Not Available" });
            }
            ;
        };
        _this.state = {
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
        _this.getWeather = _this.getWeather.bind(_this);
        return _this;
    }
    ;
    Location.prototype.componentDidMount = function () {
        this.getWeather();
    };
    ;
    Location.prototype.render = function () {
        return (React.createElement("div", null,
            this.state.errWeather !== "" ? this.state.errWeather : "",
            this.state.statusLocation !== "" ? this.state.statusLocation : "",
            this.state.weatherData.hasOwnProperty('weather') ? React.createElement(Weather /*weatherMain={this.state.weatherMain} weatherWeather={this.state.weatherWeather}*/, { weatherData: this.state.weatherData, name: this.state.name, currently: this.state.currently, temperatureFahrenheit: this.state.temperatureFahrenheit, temperatureCelsius: this.state.temperatureCelsius, humidity: this.state.humidity, pressure: this.state.pressure, windSpeed: this.state.windSpeed }) : ""));
    };
    ;
    return Location;
}(Component));
;
export default Location;
