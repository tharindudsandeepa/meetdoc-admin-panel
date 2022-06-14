import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import './rejectlist.css';
import ThumbDownOffAltSharpIcon from '@mui/icons-material/ThumbDownOffAltSharp';


function RejectList() {
  return (
    <div className="rejectlist">
        <SideBar/>
        <div className="middleContainer">
            <NavBar/>
            <div className="reject-list-container">
                <div className="path">
                    <ThumbDownOffAltSharpIcon  sx={{ml:"-20px",color:"gray"}}/>
                    <span className="path-text">/Rejected List</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RejectList;
