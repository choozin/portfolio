import React, { Component, useContext, useEffect } from 'react';
import { ToDosContext } from '../contexts/ToDosContext';
import { ThemeContext } from '../contexts/ThemeContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

 
const ToDos = () => {

    const { toDos } = useContext(ToDosContext);

    useEffect(() => {
        console.log('ToDos rendered');
        console.log(toDos);
    });

    return ( 
        <div className='todos'>
            <List>
                {toDos.map(todo => {
                    return (
                        //<ItemDetails todo={todo} key={todo.id} />
                        <ListItem button key={todo.id}>
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