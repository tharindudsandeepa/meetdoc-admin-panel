import React from 'react';
import "./featurecard.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function FeatureCard(props) {
  return (
    <div className="featurecard">
        <div className="top-feature">
            <h1 className="title-head">{props.title}</h1>
        </div>
        <div className="bottom-feature">
            <div className="featuredChart">
                <CircularProgressbar value={props.value} text={`${props.value}%`}
                    styles={buildStyles({
                        pathColor:'#334a6b',
                        textColor:'#334a6b'
                    })}
                />
            </div>
            <p className="title">{props.subtitle}</p>
            <p className="amount">{props.subvalue}</p>
        </div>
    </div>
  );
};

export default FeatureCard;