import React, { useState, useEffect } from 'react';
import emoji from 'node-emoji';

const EditForm = (props) => {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (props.job) {
            updateFormValues(props.job)
        }
    }, [props.job])


    const updateFormValues = ({company, title, description}) => {
        setCompany(company);
        setTitle(title);
        setDescription(description);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company && title) {
            props.handleEditSubmit({company, title: emoji.emojify(title), description});
        }
        updateFormValues({company: "", title: "", description: ""})
    }

    const discardForm = () => {
        updateFormValues({company: "", title: "", description: ""})
        props.discardForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Job</h2>
            <input required onChange={(e) => setCompany(e.target.value)} type="text" name="company" placeholder="Company" value={company}/>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Job Title" value={title}/>
            
            <textarea onChange={(e) => setDescription(e.target.value)} value={description}>
            </textarea>

            <button type="submit">Submit</button>
            <button className="exit-button" onClick={discardForm}>Discard</button>
        </form> 
    )
}
export default EditForm;