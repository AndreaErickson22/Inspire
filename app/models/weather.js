export default class Weather {
  constructor(data) {
    this.city = data.name
    this.farenheit = this.getFarhn(data.main.temp)
  }

  getTemplate() {
    return `
    <div class="card WEATHER">
    <div class="card-body current-weather"> 
  <div class="weather-template align-middle'>
    <h2 class="this-city">${this.city}</h2>
    <h2 class="this-temp">${this.farenheit}</h2>

  </div>
     </div>
  `
  }

  getFarhn(kelvin) {
    let farenheit = Math.floor((kelvin - 273) * 1.8) + 32;
    return farenheit
  }
}

    // HEY FUN FACT
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C

