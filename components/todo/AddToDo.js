import React, { Component, useContext, useState } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

const AddToDo = () => {
    const { toDos } = useContext(ToDosContext);

    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [datetime, setDatetime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toDos.addToDo(label, description, category, datetime);

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

export default AddToDo;