import React, {Component} from "react";

const lat = 39.67575;
const long = -104.88600;
const APIkey = "54027aaa136404819ab799aaa96235ce";
// https://api.darksky.net/forecast/54027aaa136404819ab799aaa96235ce/37.8267,-122.4233

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const weatherURL = "https://api.darksky.net/forecast/54027aaa136404819ab799aaa96235ce/" + lat + "," + long;

export default class WeatherContainer extends Component {
    constructor(){
        super();
        this.state = {
            // values given
            apparentTemperature: "",

            // values to be calculated
            hot: false,
            top: "",
            bottom: "",
            jacket: false,
            wetGear: false,
            snowGear: false
        }
    }
    getWeather = async () => {
        try {
            const weather = await fetch(proxyurl + weatherURL);
            const parsedWeather = await weather.json();
            console.log(parsedWeather)
            return parsedWeather;
        }catch(err){
            console.log(err);
        }
    }
    componentDidMount(){
        this.getWeather().then((weather) => {
            this.setState({
                apparentTemperature: weather.currently.apparentTemperature,
            })
        })
    }
    render(){
        return(
            <div>
                {/* Show weather map of submitted */}
                {this.state.apparentTemperature ? <h4>It feels like {this.state.apparentTemperature}°F right now.</h4>: <p>No temperature data</p>}
            </div>
        )
    }
}

// if it's raining (or probably going to rain), they'll need a coat
// if apparent Temp is over 75, tell them "it's shorts weather" and show a nice pair of shorts
// 