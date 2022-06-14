import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import './transaction.css';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';


function TransactionPage(){
    return(
        <div className="transaction-page">
            <SideBar/>
            <div className="middleContainer">
                <NavBar/>
                <div className="transaction-container">
                    <div className="path">
                        <ReceiptSharpIcon sx={{ml:"-20px",color:"gray"}}/>
                        <span className="path-text">/Transactions</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;