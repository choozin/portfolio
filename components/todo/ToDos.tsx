import React, { Component, useState, useContext, useEffect } from 'react';
import { ToDosContext } from '../../contexts/ToDosContext';

import { db, base } from '../firebase/firebase';

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

const ToDos = () => {

    const [onlyShowPriority, setOnlyShowPriority] = useState(false)
    const [sort, setSort] = useState(null)

    const { toDos } = useContext(ToDosContext);

    const deleteItem = (id) => {

        toDos.removeToDo(id);

    }

    const sortItems = (type) => {

        toDos.sortToDos(type)

    }

    const togglePriority = () => {

        setOnlyShowPriority(onlyShowPriority ? false : true);

    }

    const handleChange = (e) => {
        let selection = e.target.value;
        setSort(selection);

        switch (selection) {
            case 'chronologic':
                sortItems('chronologic')
                break;
            case 'category':
                sortItems('category')
                break;
            case 'alphabetical':
                sortItems('alphabetical')
                break;
        }
    }

    let priorityBtnColor = onlyShowPriority ? "secondary" : "primary"

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
                        onChange={handleChange}
                        style={{ minWidth: '150px' }}
                    >
                        <MenuItem value={'alphabetical'}>Alphabetical</MenuItem>
                        <MenuItem value={'category'}>Category</MenuItem>
                    </Select>
                </FormControl>
                {onlyShowPriority ? 
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setOnlyShowPriority(!onlyShowPriority)}
                >
                    Priority Only
                </Button>
                :
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOnlyShowPriority(!onlyShowPriority)}
                >
                    Priority Only
                </Button>
                }
            </div>
            <List>
                {toDos.updatedToDos.length > 0 && toDos.updatedToDos.map(item => {

                    let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);

                    if (showItem) {
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
        </div >
    );

}

export default ToDos;