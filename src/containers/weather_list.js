import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return(
          <tr key={ name }>
              <td>{ name }</td>
              <td><WeatherChart data={ temps } color="blue" units="℃"/></td>
              <td><WeatherChart data={ pressures } color="orange" units="hPa"/></td>
              <td><WeatherChart data={ humidities } color="red" units="%"/></td>
          </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (℃)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);