import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Header from "./HomePage/Header";
import "./App.css"
import SearchPage from "./functionality/SearchPage";
import Aboutpage from "./About/Aboutpage";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/search" element={<SearchPage/>} />
                <Route path="/about" element={<Aboutpage/>} />
            </Routes>
        </div>
    );
};

export default App;