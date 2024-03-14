import React from 'react';
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            {/*/* Add navBar here */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="market" element={<MarketPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
