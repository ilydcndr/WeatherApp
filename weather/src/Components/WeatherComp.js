import React from "react";

function Weather(props) {

  const weatherValues = (
    <div className="text-center">
      <i class={`wi ${props.icon} display-2`}></i>
      <h5 className="mt-3"></h5>
      <h5>{props.aveDeg}&deg;</h5>
      <h5>{props.minDeg}&deg; {props.maxDeg}&deg;</h5>
      <h5>{props.desc}</h5>
      <h5>{props.location}</h5>
    </div>
  );

  return (
    <div>
      <h5 className="text-center mt-3">{props.getTime()}</h5>
      {props.initialSearch ? weatherValues :null}
    </div>
  );
}
export default Weather;
