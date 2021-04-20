import React, { Component } from 'react'

export default class WeatherDataComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // if updated city is the same as previous city name, don't re-render this component
        if (nextProps.city === this.props.city && nextProps.temp === this.props.temp) {
            return false;
        }
        return true;
    }

    render() {
        console.log('render from Weather component');
        return (
            <div>
                <p>Feels like: {this.props.feelsLike}&deg;C</p>
                <p>City: {this.props.city}</p>
                <img src={`https://openweathermap.org/img/wn/${this.props.icon}@4x.png`} 
                alt="weather icon"/>

                <div>
                    <h1>Current temperature: {this.props.temp}&deg;C</h1>
                </div>

                <div>
                    <p>humidity:{this.props.humidity}</p>
                    <p>feeels like: {this.props.feelsLike}&deg;C</p>
                    <p>max temperature:{this.props.maxTemp}&deg;C</p>
                    <p>min temperature:{this.props.minTemp}&deg;C</p>
                </div>
            </div>
        )
    }
}
