import { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { db, base } from '../firebase/firebase';

import { v4 as uuid } from 'uuid'

const ToDosFirebase = () => {

    const [todos, setTodos] = useState({})
    const [onlyShowPriority, setOnlyShowPriority] = useState(false)

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
    useEffect(() => {
        const ref = base.fetch(`todos`, {
            context: {
                setState: ({ todos }) => setTodos({ ...todos }),
                state: { todos },
            },
            asArray: true,
            then(data) {
                setTodos(data)
            }
        })
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

    return (
        <div className='todos'>
            <div className='sort'>
                <input type='button' value='category' />
                <input type='button' value='alphabetically' />
                <input type='button' value='Priority Only' />
            </div>
            <List>
                {//typeof todos !== 'undefined' ?
                    //console.log('todos: ', todos)
                    Object.values(todos).map(item => {

                        let showItem = ((onlyShowPriority && item.priority) || !onlyShowPriority);

                        if (showItem) {
                            return (
                                <ListItem button key={item.id}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>

                                    <ListItemText primary={item.label} />
                                    <span>{item.category}</span>
                                </ListItem>
                            )
                        }
                    }) //:
                    //console.log('todos is undefined: ', todos)
                }
            </List>
        </div>
    )

}

export default ToDosFirebase