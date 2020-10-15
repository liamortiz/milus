import React from 'react';
import Card from './Card';

const BoardContainer = () => {
    return (
        <div id="board-container">
            <Card heading="Applied" subheading="Congratulations on taking the first step!"/>
            <Card heading="Phone Interview" subheading="You landed the phone interview, is your time to shine!"/>
            <Card heading="On Site" subheading="You're almost there! One step closer to an offer!"/>
            <Card heading="Offer" subheading="You did it!"/>
        </div>
    )
}
export default BoardContainer;