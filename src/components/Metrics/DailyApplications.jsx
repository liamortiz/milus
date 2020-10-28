import React, { useState } from 'react';

const DailyApplications = () => {
    const [totalApplications, setTotalApplications] = useState(102);
    
    const renderGridBars = () => {
        
    }


    return (
        <div className="daily-applications-container">
            <div className="header">
                <h2>Daily Applications</h2>
                <p>{totalApplications} Applications</p>
            </div>
            <div className="grid">
            <div className="grid-bar"></div>
            <div className="grid-bar"></div>
            <div className="grid-bar"></div>
            <div className="grid-bar"></div>
            </div>
        </div>
    )
}
export default DailyApplications;