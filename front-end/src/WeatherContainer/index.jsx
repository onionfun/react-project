import React, {Component} from "react";
import Weather from "../Weather";

const DarkSkyAPIkey = "54027aaa136404819ab799aaa96235ce";
const googleAPIkey = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";
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
        console.log(this.props.location);
        const fetchURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.props.location.toString() + "&key=" + googleAPIkey + "&type=json";
        console.log(fetchURL);
        try {
            const cityInfo = await fetch(proxyurl + fetchURL);
            const parsedCityInfo = await cityInfo.json();
            console.log(parsedCityInfo);
            this.setState({
                city: parsedCityInfo.results[0].address_components[1].long_name,
                lat: parsedCityInfo.results[0].geometry.location.lat,
                long: parsedCityInfo.results[0].geometry.location.lng,
            });
            console.log("GOT HERE")
            const weatherURL = "https://api.darksky.net/forecast/" + DarkSkyAPIkey + "/" + this.state.lat + "," + this.state.long;
            console.log("GOT HERE 2")
            console.log(weatherURL);
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
                <Weather />
                <h1>Hi, {this.props.username}!</h1>
                {/* Show weather map of submitted */}
                {this.state.apparentTemperature ? <h4>It feels like {this.state.apparentTemperature}°F right now in {this.state.city}.</h4>: <p>No temperature data</p>}
                {/*this.state.apparentTemperature >= 70 ? <h4>Take off your pants and jacket</h4>: <h4>Don't forget your booties cuz it's cold out there</h4> */}
            </div>
        )
    }
}

// if it's raining (or probably going to rain), they'll need a coat
// if apparent Temp is over 75, tell them "it's shorts weather" and show a nice pair of shorts
// 