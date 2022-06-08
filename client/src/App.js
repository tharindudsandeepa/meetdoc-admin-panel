import React from "react";
import Home from "./components/HomePage/Home";

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App(){
    return(
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}


export default App;