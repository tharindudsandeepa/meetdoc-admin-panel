import React from "react";
import './add.css';
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function Add(){
    return(
        <div className="add">
                <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="transaction-container">
                    <div className="path">
                        <AddCircleSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                        <span className="path-text">/Add Medical Ceneter</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Add;
