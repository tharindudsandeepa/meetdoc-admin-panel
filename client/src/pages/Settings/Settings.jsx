
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import React from 'react';
import './settings.css';

function Settings() {
  return (
    <div className="settings">
        <SideBar/>
        <div className="middleContainer">
            <NavBar/>
            <div className="reject-list-container">
                Settings
            </div>
        </div>
    </div>
  )
}

export default Settings