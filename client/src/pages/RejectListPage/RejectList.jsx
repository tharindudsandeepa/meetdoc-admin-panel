import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import './rejectlist.css';


function RejectList() {
  return (
    <div className="rejectlist">
        <SideBar/>
        <div className="middleContainer">
            <NavBar/>
            <div className="reject-list-container">
                Rejected List
            </div>
        </div>
    </div>
  )
}

export default RejectList;
