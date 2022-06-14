import React from "react";
import './approve.css';
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import GradingSharpIcon from '@mui/icons-material/GradingSharp';

function Approve(){
    return(
        <div className="approve">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    <div className="path">
                        <GradingSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                        <span className="path-text">/Approved List</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approve;