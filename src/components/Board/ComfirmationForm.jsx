import React from 'react';

const ConfirmationForm = ({ confirm, prompt }) => {
    return (
        <div className="confirmation-form">
            <h1>Warning</h1>
            <h2>{prompt}</h2>
            <button onClick={() => confirm(true)}>Delete All</button>
            <button onClick={() => confirm(false)}>Cancel</button>
        </div>
    )
}
export default ConfirmationForm;