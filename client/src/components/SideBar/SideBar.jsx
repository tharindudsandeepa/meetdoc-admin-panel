import React from "react";
import "./SideBar.css"

//material ui icons import 

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';


const SideBar=()=>{
    return(
        <div className="sidebar">
            <div className="top">
                <HealthAndSafetyRoundedIcon sx={{ fontSize: "40px" }} className="logo-icon"/>
                <span className="logo">MeetDoc</span>
            </div>
            
            <div className="bottom">
                <ul>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <EmailOutlinedIcon className="icon"/>
                        <span>Email</span>
                    </li>
                    <li>
                        <MedicalServicesOutlinedIcon className="icon"/>
                        <span>Medical Centers</span>
                    </li>
                    <li>
                        <ReceiptOutlinedIcon className="icon"/>
                        <span>Transactions</span>
                    </li>
                    <li>
                        <AddBoxOutlinedIcon className="icon"/>
                        <span>Add Medical Center</span>
                    </li>
                    <li>
                        <FactCheckOutlinedIcon className="icon"/>
                        <span>Approved List</span>
                    </li>
                    <li>
                        <ThumbDownAltOutlinedIcon className="icon"/>
                        <span>Rejected List</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;