import React from "react";
import "./card.css";


function Card(props){
    return(
        <div className="Card">
            <h4 className="heading">{props.name}</h4>
            <h2 className="info">{props.info}</h2>
        </div>
    );
};

export default Card;
