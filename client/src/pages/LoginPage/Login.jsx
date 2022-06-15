import React from "react";
import "./login.css";
import FormInput from "../../components/FormInput/FormInput";

import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';


function Login(){
    return(
        <div className="Login">
            <div className="logoName">
                <HealthAndSafetyRoundedIcon sx={{fontSize:"100px;",color:"#19598d"}}/>
                <h1 className="brand-name">MeetDoc</h1>
                <h3 className="product-name">Appointment Management System</h3>
            </div>
            <div className="login-form">
                <div className="intro">
                    <h2>Welcome to Admin Site</h2>
                    <p className="question">Is this your first time?</p>
                    <p className="answer">Login to the system with the username and password provided by company.</p>

                    <p className="help"><span>Want access to the Admin Site?</span>
                    <br/>Simply contact our Meetdoc Support Team for help to get set up.</p>
                    
                </div>
                <div className="login-side">
                    <h2 className="login-title">Login</h2>
                    <form action="">
                        <FormInput label="Email" placeholder="Email" type="email"/>
                        <FormInput label="Password" placeholder="Password" type="password"/>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;