import React, { Component, useState, useContext, useEffect } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

import { db, base } from '../firebase/firebase';

import { v4 as uuid } from 'uuid'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const ToDosLocalStorage = () => {

    const [onlyShowPriority, setOnlyShowPriority] = useState(false)

    // for Add ToDo
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [datetime, setDatetime] = useState('');
    const [priority, setPriority] = useState(false);

    const [initialArray, setInitialArray] = useState([]);
    const [updatedArray, setUpdatedArray] = useState(
        localStorage.todos ?
            JSON.parse(localStorage.getItem('todos')) :
            []
    );

    //console.log(localStorage.todos ? JSON.parse(localStorage.todos) : 'no');

    const deleteItem = (id) => {

        const tempArray = updatedArray;
        let index = 0;

        for(let i = 0; i < tempArray.length; i++) {
            if(tempArray[i].id = id) index = i;
        }

        tempArray.splice(index);

        localStorage.setItem('todos', JSON.stringify(tempArray))
        setUpdatedArray(tempArray);
        //() => location.reload();
        
    }

    const addItem = () => {

        let newItem = {
            label: label,
            description: description,
            category: category,
            priority: priority,
            id: uuid(),
            datetime: 'now',
        }

        const tempArray = updatedArray;
        tempArray.push(newItem)
        setUpdatedArray(tempArray)
        localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(tempArray))

        setLabel('');
        setDescription('');
        setCategory('');
        setDatetime('');
        setPriority(false);

        //console.log('new item', newItem)
        //console.log('temp array', tempArray)

    }

    const sortItems = (type) => {



    }

    const togglePriority = () => {

        setOnlyShowPriority(onlyShowPriority ? false : true);

    }

    return (
        <div className='todos'>
            <div className='sort'>
                <input type='button' value='Priority Only' onClick={() => togglePriority()} />
            </div>
            <List>
                {updatedArray.length > 0 && updatedArray.map(item => {

                    let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);
                    
                    if (showItem && (item !== null)) {
                        return (
                            <ListItem button key={item.id}>
                                <ListItemIcon>
                                    <InboxIcon onClick={() => deleteItem(item.id)} />
                                </ListItemIcon>

                                <ListItemText primary={item.label} />
                                <span>{item.category}</span>
                            </ListItem>
                        )
                    }
                })}
            </List>
            <form onSubmit={addItem}>
                <input type="text"
                    placeholder="label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)} required />
                <input type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <input type="text"
                    placeholder="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} />
                <input type="text"
                    placeholder="datetime"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)} />
                <input type="submit" value="Add To Do" />
            </form>
        </div>
    );

}

export default ToDosLocalStorage;