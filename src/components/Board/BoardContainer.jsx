import React from 'react';
import Card from './Card';

const BoardContainer = () => {
    return (
        <div id="board-container">
            <Card heading="Applied"/>
            <Card heading="Phone Interview"/>

            <div className="create-card">
            </div>
        </div>
    )
}
export default BoardContainer;