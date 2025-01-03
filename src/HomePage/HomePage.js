import React from "react";
import "./homepageStyle.css"
import {useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    const HandleSearch = () => {
        navigate("/search")
    }

    return (
        <div className="app-container">
            <div className="content">
                <h1>Easily get your McGill exam information with this app</h1>
                <div className="card">
                </div>
                <button onClick={HandleSearch} className={'animated-button'}>Start</button>
            </div>
        </div>
    );
}

export default HomePage;
