import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import emoji from 'node-emoji';

const Form = (props) => {

    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");
    const [source, setSource] = useState("");

    useEffect(() => {
        if (props.job) {
            updateFormValues(props.job)
        }
    }, [props.job])

    const updateFormValues = ({company, title, description, salary, source}) => {
        setCompany(company);
        setTitle(title);
        setDescription(description);
        setSalary(salary);
        setSource(source);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (company && title) {
            if (props.addJobPost) {
                props.addJobPost({company, title: `${title} ${emoji.random().emoji}`, id: uuidv4(), description, salary, date: new Date().toLocaleDateString()});
            } else {
                props.handleEditSubmit({company, title: emoji.emojify(title), description, salary, date: new Date().toLocaleDateString()});
            }
            
        }
        updateFormValues({company: "", title: "", description: ""})
    }
    const discardForm = () => {
        updateFormValues({company: "", title: "", description: ""})
        props.discardForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{props.formTitle}</h2>
            <input required onChange={(e) => setCompany(e.target.value)} type="text" name="company" placeholder="Company" value={company}/>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Job Title" value={title}/>
            
            <input type="text" placeholder="Salary $60,000" value={salary} onChange={(e) => setSalary(e.target.value)}></input>
            <input type="text" placeholder="Source (LinkedIn)" value={source} onChange={(e) => setSource(e.target.value)}></input>
            
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Job Description" value={description}>
            </textarea>

            <button type="submit">Submit</button>
            <button className="exit-button" onClick={discardForm}>Discard</button>
        </form> 
    )
}
export default Form;