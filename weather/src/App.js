
import React, { Component } from 'react'
import InputComp from './Components/InputComp'
import WeatherComp from './Components/WeatherComp'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <InputComp/>
        <WeatherComp/>
      </div>
    )
  }
}


export default App;
