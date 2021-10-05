import React, { Component, useState, useContext, useEffect, useReducer } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

import { db, base } from '../firebase/firebase';

import { v4 as uuid } from 'uuid'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

import AddLocalToDo from './AddLocalToDo';


const ToDosLocalStorage = () => {

    const [onlyShowPriority, setOnlyShowPriority] = useState(false)
    const [sort, setSort] = useState(null)

    const [initialArray, setInitialArray] = useState([]);
    const [updatedArray, setUpdatedArray] = useState(
        localStorage.todos ?
            JSON.parse(localStorage.getItem('todos')) :
            []
    );

    const [ , forceUpdate ] = useReducer(x => x+1, 0)

    //console.log(localStorage.todos ? JSON.parse(localStorage.todos) : 'no');

    const deleteItem = (id) => {
        
        const tempArray = updatedArray;
        
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].id === id) tempArray.splice(i, 1);
        }

        localStorage.setItem('todos', JSON.stringify(tempArray))
        setUpdatedArray(tempArray);
        forceUpdate()
    }

    const addItem = (label, description, category, priority) => {

        let newItem = {
            label: label,
            description: description,
            category: category,
            priority: priority,
            id: uuid(),
        }

        const tempArray = updatedArray;
        tempArray.push(newItem)
        setUpdatedArray(tempArray)
        localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(tempArray))


    }

    const sortItems = (type) => {

        let unsortedArray = Object.values(updatedArray);
        let sortedArray = [];
        switch (type) {
            case 'category':
                //
                sortedArray = unsortedArray.sort((a, b) => a.category.localeCompare(b.category));
                setUpdatedArray([...sortedArray]);
                break;
            case 'alphabetical':
                //
                sortedArray = unsortedArray.sort((a, b) => a.label.localeCompare(b.label));
                setUpdatedArray([...sortedArray]);
                break;
            default:
                //
                break;
        }

    }

    return (
        <div className='todos'>
            <div className='sort' style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <FormControl>
                    <InputLabel id="sort-label">Sort By...</InputLabel>
                    <Select
                        labelId="sort-label"
                        id="sort-select"
                        value={sort}
                        label="Sort by..."
                        onChange={(event) => sortItems(event.target.value)}
                        style={{ minWidth: '150px' }}
                    >
                        <MenuItem value={'alphabetical'}>Alphabetical</MenuItem>
                        <MenuItem value={'category'}>Category</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color={onlyShowPriority ? "secondary" : "#888"}
                    value={onlyShowPriority}
                    onClick={() => setOnlyShowPriority(!onlyShowPriority)}
                >
                    Priority Only
                </Button>
            </div>
            <List>
                {updatedArray.length > 0 && updatedArray.map(item => {

                    let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);
                    console.log('showitem', showItem)

                    if (showItem && (item !== null)) {
                        return (
                            <ListItem button key={item.id}>
                                <ListItemIcon>
                                    <DeleteIcon onClick={() => deleteItem(item.id)} />
                                </ListItemIcon>

                                <ListItemText primary={item.label} onClick={() => alert(item.description ? item.description : 'No description provided.')} />
                                <span>{item.category}</span>
                            </ListItem>
                        )
                    }
                })}
            </List>
            <AddLocalToDo addToDo={addItem}/>
        </div>
    );

}

export default ToDosLocalStorage;