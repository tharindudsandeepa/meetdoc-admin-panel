import React from "react";
import Home from "./pages/HomePage/Home";
import TransactionPage from "./pages/TransactionPage/Transaction";

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Email from "./pages/Email/Email";
import MedicalCenters from "./pages/MedicalCenters/MedicalCenetrs";
import Add from "./pages/AddMedicalCenterPage/Add";
import Approve from "./pages/ApproveList/Approve";
import RejectList from "./pages/RejectListPage/RejectList";
import Settings from "./pages/Settings/Settings";


function App(){
    return(
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/email" element={<Email/>}></Route>
                <Route path="/medicalcenters" element={<MedicalCenters/>}></Route>
                <Route path="/transactionpage" element={<TransactionPage/>}></Route>
                <Route path="/addmedicalcenter" element={<Add/>}></Route>
                <Route path="/approvedlist" element={<Approve/>}></Route>
                <Route path="/rejectlist" element={<RejectList/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
                
            </Routes>
        </BrowserRouter>
        </div>
    )
}


export default App;