import React, { Component, useContext, useState } from 'react';

import { db, base } from './firebase';

import { v4 as uuid } from 'uuid'

const AddToDoFirebase = (props) => {

    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [datetime, setDatetime] = useState('');
    const [priority, setPriority] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let ref = base.push('todos', { 
            data: {
                label: label,
                category: category,
                priority: priority,
                description: description,
                datetime: datetime,
                id: uuid()
            },
            then(err){ console.log('could not add todo: ', err) }
        })
        props.callback(ref)

        // clear out state
        setLabel('');
        setDescription('');
        setCategory('');
        setDatetime('');
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="label" 
                value={label}
                onChange={(e) => setLabel(e.target.value)} required/>
            <input type="text" 
                placeholder="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" 
                    placeholder="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}/>
            <input type="text" 
                placeholder="datetime" 
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}/>
            <input type="submit" value="Add To Do"/>
        </form>
     );
}

export default AddToDoFirebase;