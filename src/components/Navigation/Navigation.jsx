import React from 'react';

const Navigation = () => {
    return(
        <nav>
            <a href="/" className="logo"><h1>Milus</h1></a>
            <ul>
                <li><a href="">Board</a></li>
                <li><a href="">Metrics</a></li>
                <li><a href="">Profile</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;