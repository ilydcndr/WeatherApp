import React from 'react'
import { Form,Input, Button } from 'reactstrap';
import './InputComp.css'

 function InputComp(props) {
        return (
            <div>
                <div></div>
                <Form className="row justify-content-center ">
                   <Input className="col-4 mt-5 mr-2" type="text" name="city" value={props.valueCity} id="city" placeholder="City" onChange={(e)=>{props.saveValue(e,'city')}} />
                   <Input className="col-4 mt-5 ml-2" type="text" name="country" value={props.valueCountry}  id="country" placeholder="Country" onChange={(e)=>{props.saveValue(e,'country')}} />
                </Form>
                <div className="row justify-content-center mt-3 ">
                <Button  color="primary" onClick={()=>{props.search()}}>Search</Button>
                </div> 
            </div>
        )
    
}

export default InputComp;
