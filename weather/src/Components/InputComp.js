import React from 'react';
import { Form,Input } from 'reactstrap';
import './InputComp.css'


 function InputComp() {
        return (
            <div> 
                <Form className="row justify-content-center ">
                   <Input className="col-3 mt-5 mr-2" type="search" name="city" id="cityid" placeholder="City" />
                   <Input className="col-3 mt-5 ml-2" type="search" name="country" id="countryid" placeholder="Country" />
                </Form>            
            </div>
        )
}
export default InputComp;
