
import React, { Component } from 'react'
import InputComp from './Components/InputComp'
import WeatherComp from './Components/WeatherComp'
import "./App.css"

const API_Key="9ce4bf627d054fa1d54a5bddcbe59920"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valueCity:"",
      valueCountry:"",
      location:"",
      description:"",
      maxDeg:0,
      minDeg:0,
      aveDeg:0,
      initialSearch:false
  }}

  saveValue=(e,x)=>{
    if(x==='city'){
      this.setState({
            valueCity:e.target.value
            
      });
    }
     if(x==='country'){
      this.setState({
        valueCountry:e.target.value
      },()=>{
        console.log(this.state.valueCountry)
      })
    }
  }

  search=()=>{
    this.setState({
      location:`${this.state.valueCity},${this.state.valueCountry}`
    },()=>{
      console.log(this.state.location)
    })
    setTimeout(() => {
      this.setState({
        valueCity:"",
        valueCountry:""
      })
    }, 1);

    let API=`https://api.openweathermap.org/data/2.5/weather?q=${this.state.valueCity},${this.state.valueCountry}&appid=${API_Key}`
     fetch(API)
     .then(response=>response.json())
     .then(data=>{
       this.setState({
           initialSearch:true,
           description:data.weather[0].description,
           aveDeg:Math.round(data.main.temp-273.15),
           minDeg:Math.round(data.main.temp_min-273.15),
           maxDeg:Math.round(data.main.temp_max -273.15)         
       })
     }); 
  }

  getTime=()=>{
    const d = new Date()
    const dayNumber=d.getDate()
    const month=d.getMonth()
    const year=d.getFullYear()
    const day=d.getDay()
    const array=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const getDay=array[day]
   return(
    `${getDay},  ${dayNumber}.${month}.${year} `
   )
  }

  componentDidMount(){
    setInterval(() => {
      this.getHours()
    }, 1);
  }

  getHours=()=>{
    const d = new Date()
    const s=d.getHours();
    const m= d.getMinutes()
    const sn=d.getSeconds()
    return(
      `${s}:${m}:${sn}`
    )
  }

 
  render() {
    return (
      <div>
        <h5 className="text-right mt-3 mr-5">{this.getHours()}</h5>
        <InputComp saveValue={this.saveValue} search={this.search} valueCity={this.state.valueCity} valueCountry={this.state.valueCountry}/>
        <WeatherComp getTime={this.getTime} location={this.state.location} initialSearch={this.state.initialSearch} aveDeg={this.state.aveDeg} minDeg={this.state.minDeg} maxDeg={this.state.maxDeg} desc={this.state.description}/>
      </div>
    )
  }
}

export default App;
