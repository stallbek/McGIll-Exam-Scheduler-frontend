import React, { useEffect, useState } from 'react';
import './SearchStyle.css';
import axios from "axios";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [info, setInfo] = useState(null);
    const [hasError, setHasError] = useState(false);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
            setInfo(null);
            setHasError(false);
        }
    };

    useEffect(() => {
        if (!searchQuery.trim()) {
            return;
        }

        

        axios.get(`https://backend-scheduler-4a66b7f12154.herokuapp.com/api/courses/name/${searchQuery}`)
            .then(res => {
                setInfo(res.data);
                setHasError(false);
            })
            .catch(() => {
                setInfo(null);
                setHasError(true);
            });
    }, [searchQuery]);

    return (
        <div className="dark-search-page">
            <div className="search-section">
                <div className={`search-bar-container ${isSearching ? 'active' : ''}`}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="dark-search-input"
                    />
                </div>
            </div>
            <main className={`dark-search-results ${isSearching ? 'active' : ''}`}>
                {isSearching && info ? (
                    <div className="dark-results">
                        <h2>{info.name}</h2>
                        <div>
                            <p>Building: {info.building}</p>
                            <p>Room: {info.room}</p>
                            <p>Rows: {info.rows}</p>
                            <p>Date start: {info.timeStart}</p>
                            <p>Date end: {info.timeEnd}</p>
                            <p>Exam type: {info.examType}</p>

                        </div>
                    </div>
                ) : hasError ? (
                    <div className="dark-error-state">
                        <h2>No results found or an error occurred.</h2>
                    </div>
                ) : (
                    <div className="dark-empty-state">
                        <h2>Search exam info</h2>
                        <p>Course title should be written in this kind of format: XXXX ###, e.g ACCT 352</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SearchPage;
