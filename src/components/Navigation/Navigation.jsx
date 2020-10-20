import React from 'react';

const Navigation = () => {
    return(
        <nav>
            <a href="/" className="logo"><h1>Milus</h1></a>
            <ul>
                <li><i className="icon board-icon"></i><a href="/">Board</a></li>
                <li><i className="icon metrics-icon"></i><a href="/">Metrics</a></li>
                <li><i className="icon profile-icon"></i><a href="/">Profile</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;