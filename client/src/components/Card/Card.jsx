import React from "react";
import "./card.css";


function Card(props){
    return(
        <div className="Card">
            <h4>{props.name}</h4>
        </div>
    );
};

export default Card;
