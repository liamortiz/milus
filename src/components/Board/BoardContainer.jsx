import React from 'react';
import Card from './Card';

const BoardContainer = () => {
    return (
        <div id="board-container">
            <Card heading="Applied"/>
            <Card heading="Phone Interview"/>
            <Card heading="On Site"/>
            <Card heading="Offer"/>
        </div>
    )
}
export default BoardContainer;