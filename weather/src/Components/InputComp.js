import React from 'react'
import { Form,Input, Button } from 'reactstrap';
import './InputComp.css'

 function InputComp(props) {
        return (
            <div>
                <Form className="row justify-content-center ">
                   <Input className="col-4 mt-5 mr-2" type="text" name="city" id="city" placeholder="City" value={props.city} onChange={props.getValue(e)}/>
                   <Input className="col-4 mt-5 ml-2" type="text" name="country" id="country" placeholder="Country" value={props.country} onChange={props.getValue(e)}/>
                </Form> 
                <div className="row justify-content-center mt-3 ">
                <Button outline color="primary">Search</Button>
                </div> 
            </div>
        )
    
}

export default InputComp;
