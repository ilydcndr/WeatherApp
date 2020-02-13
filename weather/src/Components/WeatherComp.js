import React from 'react';

function Weather(props) {    
    return (
        <div> 
            <h5 className="text-center mt-3">{props.getTime}</h5>
                   
        </div>
    )
}
export default Weather;