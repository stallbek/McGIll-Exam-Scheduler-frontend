import React from 'react';
import './Aboutage.css'

const Aboutpage = () => {
    return (
        <div className="aboutpage-container">
            <div className="aboutpage-content">
                <h1 className="aboutpage-title">About</h1>

                <div className="aboutpage-sections">
                    <div className="aboutpage-section">
                        <p className="aboutpage-heading">Why this app was developed?</p>
                        <p className="aboutpage-text">
                            Currently, users access McGill exam-related information through PDF files, which should be downloaded first and opened with a PDF reader, containing details about required and non-required courses. However, relying on PDFs can be cumbersome, as their design and structure might confuse users or make navigation difficult. To address this issue, I propose a visually appealing and user-friendly web-based platform to present this information in a clearer, more interactive format.
                        </p>
                    </div>

                    <div className="aboutpage-section">
                        <p className="aboutpage-heading">Who is the developer?</p>
                        <p className="aboutpage-text">
                            My name is Stalbek Ulanbek uulu, and I am currently pursuing a Bachelor of Science in Software Engineering at McGill University. With a passion for innovation and technology, I am dedicated to mastering the art of software development and exploring its transformative impact on the modern world.
                        </p>
                    </div>

                    <div className="aboutpage-links">
                        <a href="https://github.com/stallbek" target={'_blank'}>GitHub</a>
                        <a href="https://www.linkedin.com/in/stalbek-ulanbek-uulu/" target={'_blank'}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
