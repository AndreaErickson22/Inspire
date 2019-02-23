import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = _weatherService.Weather.getTemplate()
	//get the weather object from the service
	//add the weathers template to the template variable
	document.getElementById('current-weather').innerHTML = template

	// console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}
export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
