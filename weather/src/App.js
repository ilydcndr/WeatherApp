
import React, { Component } from 'react'
import InputComp from './Components/InputComp'
import WeatherComp from './Components/WeatherComp'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valueCity:"",
      valueCountry:""
  }}

  getValue=e=>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.setState=({
      valueCity:city ,
      valueCountry:country
    })
  }

  getTime=()=>{
    const d = new Date()
    const dayNumber=d.getDate()
    const month=d.getMonth()
    const year=d.getFullYear()
    const day=d.getDay()
    const array=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const s=d.getHours();
    const m= d.getMinutes()
    const sn=d.getSeconds()
    const getDay=array[day]
   return(
    `${getDay},  ${dayNumber}.${month}.${year} | ${s}:${m}:${sn}`
   )
  }
  
  render() {
    return (
      <div>
        <InputComp getValue={this.getValue} city={this.state.valueCity} country={this.state.valueCountry}/>
        <WeatherComp getTime={this.getTime} city={this.state.valueCity} country={this.state.valueCountry}/>
      </div>
    )
  }
}


export default App;
