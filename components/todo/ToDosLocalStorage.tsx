import React, { Component, useState, useContext, useEffect } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

import { db, base } from '../firebase/firebase';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

 
const ToDosLocalStorage = () => {

    const [ onlyShowPriority, setOnlyShowPriority ] = useState(false)

    const [ initialArray, setInitialArray ] = useState([]);
    const [ updatedArray, setUpdatedArray ] = useState(localStorage.getItem('todos'));

    const deleteItem = (id) => {

        //setUpdatedArray()

        localStorage.setItem('todos', JSON.stringify(updatedArray))

    }

    const sortItems = (type) => {

        

    }

    const togglePriority = () => {

        setOnlyShowPriority(onlyShowPriority ? false : true);

    }
    
    return ( 
        <div className='todos'>
            <div className='sort'>
                <input type='button' value='Priority Only' onClick={() => togglePriority()}/>
            </div>
            <List>
                {JSON.parse(localStorage.getItem('todos')).map(item => {
                    
                    let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);

                    if (showItem) {
                        return (
                            <ListItem button key={item.id}>
                                <ListItemIcon>
                                <InboxIcon onClick={() => deleteItem(item.id)}/>
                                </ListItemIcon>
                                
                                <ListItemText primary={item.label} />
                                <span>{item.category}</span>
                            </ListItem>
                        )
                    }
                })}
            </List>
        </div>
     );
    
}
 
export default ToDosLocalStorage;