import React, { Component, useContext, useState } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

const AddToDo = () => {
    const { toDos } = useContext(ToDosContext);

    const [description, setDescription] = useState('');
    const [datetime, setDatetime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toDos.addToDo(description, datetime);

        // clear out state
        setDescription('');
        setDatetime('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)} required/>
            <input type="text" 
                placeholder="datetime" 
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}/>
            <input type="submit" value="Add To Do"/>
        </form>
     );
}

export default AddToDo;