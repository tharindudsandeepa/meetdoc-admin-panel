import React from "react";
import "./Home.css"
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';

import HomeSharpIcon from '@mui/icons-material/HomeSharp';


import Chart from "../../components/Chart/Chart";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Home(){
    return(
        <div className="Home">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="path">
                    <HomeSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                    <span className="path-text">/Dashboard</span>
                </div>
                <div className="cards">
                    <div className="m-center">
                        <div className="card-icon"><HomeWorkSharpIcon sx={{ fontSize: "38px",margin:"4px", color:"#fff" }} /></div>
                        <Card 
                            name="Medical Centers"
                            info="+261"
                        />
                    </div>
                    <div className="doctors">
                        <div className="card-icon"><PeopleIcon sx={{ fontSize: "38px",margin:"4px",color:"#fff"}}/></div>
                        <Card 
                            name="Doctors"
                            info="+987"
                        />
                    </div>
                    <div className="appointments">
                        <div className="card-icon"><LibraryBooksSharpIcon sx={{ fontSize: "38px",margin:"4px", color:"#fff" }}/></div>
                        <Card 
                            name="Appointments"
                            info="+3867"    
                        />
                    </div>
                    <div className="revenue">
                        <div className="card-icon"><MonetizationOnSharpIcon sx={{ fontSize: "38px",margin:"4px",color:"#fff"}}/></div>
                        <Card 
                            name="Revenue"
                            info="+$12,678"
                        />
                    </div>   
                </div>

                <div className="charts">
                    <FeatureCard 
                        title="Revenue"
                        value="40"
                        subtitle="Revenue of this month"
                        subvalue="$452"
                    />
                    <Chart
                        data="data1"
                        desc="Revenue"
                    />
                </div>
                <div className="charts">
                    <FeatureCard 
                        title="New Customers"
                        value="57"
                        subtitle="New users in this month"
                        subvalue="18"
                    />
                    <Chart/>
                </div>

            </div>

            
        </div>

    )
}

export default Home;