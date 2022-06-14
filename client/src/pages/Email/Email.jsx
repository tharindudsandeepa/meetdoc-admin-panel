import React from "react";
import './email.css';

import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';


function Email(){
    return(
        <div className="email">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="email-container">
                    <div className="path">
                        <MailOutlineSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                        <span className="path-text">/Email</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;
