import React from 'react';
import "./featurecard.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function FeatureCard() {
  return (
    <div className="featurecard">
        <div className="top-feature">
            <h1 className="title-head">Total Revenue</h1>
        </div>
        <div className="bottom-feature">
            <div className="featuredChart">
                <CircularProgressbar value={40} text={`${40}%`}
                    styles={buildStyles({
                        pathColor:'#334a6b',
                        textColor:'#334a6b'
                    })}
                />
            </div>
            <p className="title">Revenue of this month</p>
            <p className="amount">$345</p>
        </div>
    </div>
  );
};

export default FeatureCard;