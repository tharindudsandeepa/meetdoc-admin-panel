import React from "react";
import './approve.css';
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

function Approve(){
    return(
        <div className="approve">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    Approved List
                </div>
            </div>
        </div>
    )
}

export default Approve;