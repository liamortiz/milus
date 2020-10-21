import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <NavLink to="/" className="logo"><h1>Milus</h1></NavLink>
            <ul>
                <li><i className="icon board-icon"></i><NavLink exact to="/" activeClassName='active-link'>Board</NavLink></li>
                <li><i className="icon metrics-icon"></i><NavLink to="/metrics" activeClassName="active-link">Metrics</NavLink></li>
                <li><i className="icon profile-icon"></i><NavLink to="/profile" activeClassName="active-link">Profile</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;