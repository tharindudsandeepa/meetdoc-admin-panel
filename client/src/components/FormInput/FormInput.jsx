import React from "react";
import "./forminput.css";


function FormInput(props){
    return(
        <div className="FormInput">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} />
        </div>
    );
};

export default FormInput;