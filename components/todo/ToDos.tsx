import React, { Component, useContext, useEffect } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

 
const ToDos = () => {

    const { toDos } = useContext(ToDosContext);
    
    return ( 
        <div className='todos'>
            <List>
                {toDos.toDos.map(todo => {
                    return (
                        <ListItem button key={toDos.toDos.id}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={todo.description} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
     );
    
}
 
export default ToDos;