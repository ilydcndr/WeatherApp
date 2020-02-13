
import React, { Component } from 'react'
import InputComp from './Components/InputComp'
import WeatherComp from './Components/WeatherComp'
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valueCity:"",
      valueCountry:"",
      location:""
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
    `${getDay},  ${dayNumber}.${month}.${year} |`
   )
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
        <WeatherComp getTime={this.getTime} location={this.state.location}/>
      </div>
    )
  }
}

export default App;
