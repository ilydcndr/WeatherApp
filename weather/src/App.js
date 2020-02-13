
import React, { Component } from 'react'
import InputComp from './Components/InputComp'
import WeatherComp from './Components/WeatherComp'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
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
        <InputComp/>
        <WeatherComp getTime={this.getTime()}/>
      </div>
    )
  }
}


export default App;
