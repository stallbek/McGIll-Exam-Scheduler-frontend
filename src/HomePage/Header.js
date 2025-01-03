import React from 'react';
import "./HeaderStyle.css"
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/")
    }

    return (
        <div className={"app-container"}>
            <header className="header">
                <div onClick={HandleClick} className="logo">McGill Exams</div>
                <nav className="nav-links">
                    <a href="/search">Search</a>
                    <a href="/about">About</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;