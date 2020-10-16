import React, { useState } from 'react';

const JobPostForm = (props) => {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company && title) {
            props.handleSubmit({company, title});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <input required onChange={handleCompanyChange} type="text" name="company" placeholder="Company" value={company}/>
            <input required onChange={handleTitleChange} type="text" name="title" placeholder="Job Title" value={title}/>
            <button type="submit">Submit</button>
            <button className="exit-button" onClick={props.toggleForm}>Discard</button>
        </form> 
    )
}
export default JobPostForm;