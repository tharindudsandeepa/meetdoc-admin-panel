import React from "react";
import "./navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';



function NavBar(){
    return(
        <div className="NavBar">
            <div className="Wrapper">
                
                
                
                <div className="search">
                    <input type="text"   placeholder="Search"/>
	                <input type="submit" value="Search" />
                </div>
                <div className="admin-panel">
                    <span>Admin Panel</span>
                </div>

                <div className="items">
                    <div className="item">
                        <NotificationsOutlinedIcon sx={{ fontSize: "29px","&:hover":{color:"#263544;",fontSize:"28px",cursor:"pointer"} }}/>
                    </div>
                    <div className="item">
                        <MailOutlineOutlinedIcon sx={{ fontSize: "29px","&:hover":{color:"#263544;",fontSize:"28px",cursor:"pointer"} }}/>
                    </div>
                    <div className="item">
                        <SettingsOutlinedIcon sx={{ fontSize: "29px","&:hover":{color:"#263544;",fontSize:"28px",cursor:"pointer"} }}/>
                    </div>
                    <div className="item">
                       <AccountCircleSharpIcon sx={{ fontSize: "40px",ml:"30px",mt:"-6px",mr:"20px","&:hover":{color:"#263544;,",cursor:"pointer"} }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;