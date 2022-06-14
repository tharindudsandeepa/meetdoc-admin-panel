import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import './transaction.css';


function TransactionPage(){
    return(
        <div className="transaction-page">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="transaction-container">
                    transaction List
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;