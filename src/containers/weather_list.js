import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)

    console.log(temps);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>

    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// the '({weather})' variable is the same as '(state.weather)'
function mapStateToProps({weather}) {

  // the 'weather' varialb eis the same as 'weather: weather'
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
