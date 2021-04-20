import React, { Component } from 'react'
import './App.css';
import WeatherDataComponent from './WeatherDataComponent';

console.log(process)
let apiKey = 'd0a3833f5778ca65ca346206e8e3534f'

export default class App extends Component {
  state={
    cityName: '',
    weatherData: null
  }

  getUserCity = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }

  formSubmission = (e) => {
    // prevent default behaviour of the form:
    e.preventDefault()

    console.log(this.state.cityName)

    if (this.state.cityName.trim() !== '') {
      this.fetchWeatherData(this.state.cityName)

    }
  }

  fetchWeatherData = (city) => {
    // injecting dinamic data with template literals:
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response=>response.json())
    .then(data => 
      this.setState({
        weatherData: data, 
        cityName: data.name
      }))
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    // it is just like onLoad
    // we have to fetch data
    this.fetchWeatherData('Vilnius')
  }

    render() {
      console.log(this.state.weatherData)
      let data = this.state.weatherData
      return (
        <div className="container">
          <h1>Weather App</h1>
          <form onSubmit={this.formSubmission}>
            <input type="text" placeholder="Enter your city" onChange={this.getUserCity}/>
            <button>Get Weather Data</button>
          </form>

          {data && <WeatherDataComponent 
            city={this.state.cityName}
            temp={data.main.temp}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            humidity={data.main.humidity}
            feelsLike={data.main.feels_like}
            icon={data.weather[0].icon}
          />}
        </div>
      )
    }
  
}
