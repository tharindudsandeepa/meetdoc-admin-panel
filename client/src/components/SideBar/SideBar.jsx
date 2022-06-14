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
import { NavLink} from "react-router-dom";


const SideBar=()=>{
    return(
        <div className="sidebar">
            <div className="top">
                <HealthAndSafetyRoundedIcon sx={{ fontSize: "40px" }} className="logo-icon"/>
                <span className="logo">MeetDoc</span>
            </div>
            
            <div className="bottom">
                <ul>
                    <li className="dashboard-link">
                        <NavLink to="/" className='nav-link'>
                            <DashboardOutlinedIcon className="icon"/>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="email-link">
                        <NavLink to="/email" className='nav-link'>
                            <EmailOutlinedIcon className="icon"/>
                            <span>Email</span>
                        </NavLink>
                    </li>
                    <li className="medical center-link">
                        <NavLink to='/medicalcenters' className='nav-link'>
                            <MedicalServicesOutlinedIcon className="icon"/>
                            <span>Medical Centers</span>
                        </NavLink>
                    </li>
                    <li className="transaction-link">
                        <NavLink to='/transactionpage' className='nav-link'>
                            <ReceiptOutlinedIcon className="icon"/>
                            <span>Transactions</span>
                        </NavLink>
                    </li>
                    <li className="add-link">
                        <NavLink to='/addmedicalcenter' className='nav-link'>
                            <AddBoxOutlinedIcon className="icon"/>
                            <span>Add Medical Center</span>
                        </NavLink>
                    </li>
                    <li className="approve-link">
                        <NavLink to='/approvedlist' className='nav-link'>
                            <FactCheckOutlinedIcon className="icon"/>
                            <span>Approved List</span>
                        </NavLink>
                    </li>
                    <li className="reject-link">
                        <NavLink to='/rejectlist' className='nav-link'>
                            <ThumbDownAltOutlinedIcon className="icon"/>
                            <span>Rejected List</span>
                        </NavLink>
                    </li>
                    <li className="setting-link">
                        <NavLink to='/settings' className='nav-link'>
                            <SettingsOutlinedIcon className="icon"/>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;