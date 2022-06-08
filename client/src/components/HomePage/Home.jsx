import React from "react";
import "./Home.css"
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";

function Home(){
    return(
        <div className="Home">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="cards">
                    <Card name="Medical Centers"/>
                    <Card name="Doctors"/>
                    <Card name="Appointments"/>
                    <Card name="Revenue"/>
                </div>
            </div>
        </div>
    )
}

export default Home;