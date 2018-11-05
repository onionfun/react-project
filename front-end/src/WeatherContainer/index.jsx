import React, {Component} from "react";

const APIkey = "54027aaa136404819ab799aaa96235ce";
// https://api.darksky.net/forecast/54027aaa136404819ab799aaa96235ce/37.8267,-122.4233

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default class WeatherContainer extends Component {
    constructor(){
        super();
        this.state = {
            city: "",
            lat: "",
            long: "",
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
    getCityInfo = async () => {
        try {
            const cityInfo = await fetch(proxyurl + "https://www.zipcodeapi.com/rest/kvvPWEc8xSIUkUm2VoX1PJUwBhBda2YOMMMThHYTWlJnG4XqehphZPbkILDowXqE/info.json/" + this.props.zip + "/degrees");
            const parsedCityInfo = await cityInfo.json();
            console.log(parsedCityInfo);
            this.setState({
                city: parsedCityInfo.city,
                lat: parsedCityInfo.lat,
                long: parsedCityInfo.lng
            });
            console.log("GOT HERE")
            const weatherURL = "https://api.darksky.net/forecast/54027aaa136404819ab799aaa96235ce/" + this.state.lat + "," + this.state.long;
            console.log("GOT HERE 2")
            const weather = await fetch(proxyurl + weatherURL);
            const parsedWeather = await weather.json();
            console.log("GOT HERE 3")
            console.log(parsedWeather)
            return parsedWeather;
        }catch(err){
            console.log(err)
        }
    }
    componentDidMount(){
        this.getCityInfo().then((weather) => {
            this.setState({
                apparentTemperature: weather.currently.apparentTemperature,
            })
        })
    }
    render(){
        console.log(this.props.username)
        return(
            <div>
                <h1>Hi, {this.props.username}!</h1>
                {/* Show weather map of submitted */}
                {this.state.apparentTemperature ? <h4>It feels like {this.state.apparentTemperature}°F right now in {this.state.city}.</h4>: <p>No temperature data</p>}
            </div>
        )
    }
}

// if it's raining (or probably going to rain), they'll need a coat
// if apparent Temp is over 75, tell them "it's shorts weather" and show a nice pair of shorts
// 