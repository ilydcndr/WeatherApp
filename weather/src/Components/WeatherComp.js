import React from 'react';

function Weather(props) {    

    return (
        <div> 
            <h5 className="text-center mt-3">{props.getTime()}</h5>
            <h5 className="text-center">{props.aveDeg}&deg;</h5>
            <h5 className="text-center">{props.minDeg}&deg; {props.maxDeg}&deg; </h5>
            <h5 className="text-center">{props.desc}</h5>     
        </div>
    )
}
export default Weather;