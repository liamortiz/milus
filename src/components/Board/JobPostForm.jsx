import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const JobPostForm = (props) => {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company && title) {
            props.handleSubmit({company, title, id: uuidv4()});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <input required onChange={(e) => setCompany(e.target.value)} type="text" name="company" placeholder="Company" value={company}/>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Job Title" value={title}/>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description}>
            </textarea>

            <button type="submit">Submit</button>
            <button className="exit-button" onClick={props.toggleForm}>Discard</button>
        </form> 
    )
}
export default JobPostForm;