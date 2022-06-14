import React from "react";
import './medicalcenters.css'

import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';

function MedicalCenters(){
    return(
        <div className="medical-centers">
        
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    <div className="path">
                        <LocalHospitalSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                        <span className="path-text">/Medical Centers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalCenters;