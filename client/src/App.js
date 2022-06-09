import React from "react";
import Home from "./pages/HomePage/Home";

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/LoginPage/Login";


function App(){
    return(
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}


export default App;