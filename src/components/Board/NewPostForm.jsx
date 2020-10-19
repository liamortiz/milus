import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import emoji from 'node-emoji';

const NewPostForm = (props) => {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (props.currentJob) {
            updateFormValues(props.currentJob)
        }
    }, [props.currentJob])


    const updateFormValues = ({company, title, description}) => {
        setCompany(company);
        setTitle(title);
        setDescription(description);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company && title) {
            props.addJobPost({company, title: `${title} ${emoji.random().emoji}`, id: uuidv4(), description});
        }
        updateFormValues({company: "", title: "", description: ""})
    }

    const discardForm = () => {
        updateFormValues({company: "", title: "", description: ""})
        props.discardForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <input required onChange={(e) => setCompany(e.target.value)} type="text" name="company" placeholder="Company" value={company}/>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Job Title" value={title}/>
            
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Job Description">
            </textarea>

            <button type="submit">Submit</button>
            <button className="exit-button" onClick={discardForm}>Discard</button>
        </form> 
    )
}
export default NewPostForm;