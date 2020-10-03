import React from 'react';

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><i className="icon board-icon"></i><a href ="/" className="active-link">My Board</a></li>
                <li><i className="icon bell-icon"></i><a href ="/">Activities</a></li>
                <li><i className="icon contact-icon"></i><a href ="/">Contacts</a></li>
                <li><i className="icon metrics-icon"></i><a href ="/">Metrics</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;