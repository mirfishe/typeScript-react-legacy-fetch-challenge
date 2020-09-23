import React, {Component} from 'react';
import Weather from "./Weather";

type testProps = {
};

type testState = {
    temperature: number
};

class Location extends Component<(testProps), testState> {

    constructor(props: testProps) {
        super(props);
        this.state = {
            temperature: 0
        };

        // this.fetchDogImage = this.fetchDogImage.bind(this);

    };

    componentDidMount() {

        // https://cors-anywhere.herokuapp.com
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        // const proxyURL:string = 'https://cors-anywhere.herokuapp.com/';

        const baseURL:string = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY:string | undefined | null = process.env.REACT_APP_API_KEY;

        let latitude:number;
        let longitude:number;

        if ("geolocation" in navigator) {
          console.log("Available");

          navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            console.log(position);

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            const URL = baseURL + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;

            console.log('URL', URL);


            fetch(URL)
            .then (response => {
                console.log('response', response);
                
                return response.json();
            })
            .then (json => {
                console.log('json', json);
                // this.setState({errForm: err});
    
            })
            .catch(err => {
                console.log(err);
                // this.setState({errForm: err});
            })
        });

        } else {
          console.log("Not Available");
        };

      };


    render() {
        return(
            <div>
                <Weather temperature={this.state.temperature}/>
            </div>
        );
    };
};

export default Location;