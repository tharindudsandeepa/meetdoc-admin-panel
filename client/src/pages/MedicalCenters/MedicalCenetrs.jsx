import React from "react";
import './medicalcenters.css'

import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

function MedicalCenters(){
    return(
        <div className="medical-centers">
        
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    Medical Centers list
                </div>
            </div>
        </div>
    );
};

export default MedicalCenters;