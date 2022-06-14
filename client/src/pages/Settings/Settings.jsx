
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import React from 'react';
import './settings.css';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';


function Settings() {
  return (
    <div className="settings">
        <SideBar/>
        <div className="middleContainer">
            <NavBar/>
            <div className="reject-list-container">
              <div className="path">
                    <SettingsApplicationsSharpIcon  sx={{ml:"-20px",color:"gray"}}/>
                    <span className="path-text">/Settings</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings