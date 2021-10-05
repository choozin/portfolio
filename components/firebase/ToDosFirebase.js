import { useState, useEffect } from 'react'

import AddToDoFirebase from './AddToDoFirebase'

import List from '@material-ui/core/List'
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

import { db, base } from '../firebase/firebase';

import { v4 as uuid } from 'uuid'

const ToDosFirebase = () => {

    const [todos, setTodos] = useState({})
    const [onlyShowPriority, setOnlyShowPriority] = useState(false)
    const [sort, setSort] = useState(null)

    /*useEffect(() => {
        const ref = base.syncState(`todos`, {
            context: {
                setState: ({ todos }) => setTodos({ ...todos }),
                state: { todos },
            },
            state: 'todos',
        })
        return () => {
            base.removeBinding(ref);
        }
    }, [])
    */

    const fetchData = () => {
        const ref = base.fetch(`todos`, {
            context: {
                setState: ({ todos }) => setTodos({ ...todos }),
                state: { todos },
            },
            asArray: false,
            then(data) {
                setTodos(data)
            }
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    /*useEffect(() => {
        todosArray.map(todo => {
            console.log('p', todo)
            const ref1 = base.push('todos', {
                data: todo,
                asArray: true,
                then(err) {
                    console.log('push', todo)
                }
            })
        })   
    }, [])*/

    const getFirebaseKeyForItemId = (id) => {

        const keys = Object.keys(todos)
        const ids = Object.values(todos).map(item => {
            return item.id
        })

        for(let i = 0; i < ids.length; i++) {
            if(ids[i] === id) return keys[i]
        }

    }

    const deleteItem = (id) => {

        let key = getFirebaseKeyForItemId(id)
        
        let obj = todos;
        delete obj[key];
        
        base.post('todos', {
            data: obj
        })

        fetchData()

    }

    const sortItems = (type) => {

        let unsortedArray = Object.values(todos);
        let sortedArray = [];
        switch (type) {
            case 'category':
                //
                sortedArray = unsortedArray.sort((a, b) => a.category.localeCompare(b.category));
                setTodos([...sortedArray]);
                break;
            case 'alphabetically':
                //
                sortedArray = unsortedArray.sort((a, b) => a.label.localeCompare(b.label));
                setTodos([...sortedArray]);
                break;
            default:
                //
                break;
        }

    }

    const togglePriority = () => {

        setOnlyShowPriority(onlyShowPriority ? false : true);

    }

    const addToDoCallback = (ref) => {

        fetchData()

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
                {//typeof todos !== 'undefined' ?
                    //console.log('todos: ', todos)
                    todos && Object.values(todos).map(item => {

                        let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);

                        if (showItem) {
                            return (
                                <ListItem id={item.id} button key={item.id}>
                                    <ListItemIcon>
                                        <DeleteIcon  onClick={() => deleteItem(item.id)}/>
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} onClick={() => alert(item.description ? item.description : 'No description provided.')} />
                                    <span>{item.category}</span>
                                </ListItem>
                            )
                        }
                    }) //:
                    //console.log('todos is undefined: ', todos)
                }
            </List>
            <AddToDoFirebase callback={addToDoCallback}/>
        </div>
    )

}

export default ToDosFirebase