import React from "react";
import './email.css';

import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";


function Email(){
    return(
        <div className="email">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    email List
                </div>
            </div>
        </div>
    );
};

export default Email;
