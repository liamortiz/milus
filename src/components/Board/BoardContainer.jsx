import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const BoardContainer = () => {
    return (
        <div id="board-container">
            <JobCard title='Applied' jobs={0}/>
        </div>
    )
}
export default BoardContainer;