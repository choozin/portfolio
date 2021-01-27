import React, { Component, useState, useContext, useEffect } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

 
const ToDos = () => {

    const [ onlyShowPriority, setOnlyShowPriority ] = useState(false)

    const { toDos } = useContext(ToDosContext);
    
    /*const sort = (sortType) => {
        switch (sortType) {
            case 'category': 
                //
                console.log(orderedList);

                break;
            case 'alphabetically': 
                //
                setOrderedList(
                    unorderedList.sort((a, b) => b.description-a.description)
                );
                console.log(unorderedList.sort((a, b) => {return a.description-b.description}));
                break;
            default: 
                //
                console.log('default sort');
                break;
        }
    }*/

    const deleteItem = (id) => {
        
        toDos.removeToDo(id);

    }

    const sortItems = (type) => {

        toDos.sortToDos(type)

    }

    const togglePriority = () => {

        setOnlyShowPriority(onlyShowPriority ? false : true);

    }
    
    return ( 
        <div className='todos'>
            <div className='sort'>
                <input type='button' value='category' onClick={() => sortItems('category')}/>
                <input type='button' value='alphabetically' onClick={() => sortItems('alphabetically')}/>
                <input type='button' value='Priority Only' onClick={() => togglePriority()}/>
            </div>
            <List>
                {toDos.updatedToDos.map(item => {
                    
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
 
export default ToDos;