import React from "react";
import './add.css';
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";


function Add(){
    return(
        <div className="add">
                <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="transaction-container">
                    Add medical center
                </div>
            </div>
        </div>
    );
};


export default Add;
