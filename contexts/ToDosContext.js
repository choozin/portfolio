import React, {
    createContext,
    useState, 
    useEffect,
} from 'react';
import { v4 as uuid } from 'uuid'

export const ToDosContext = createContext();

const ToDosContextProvider = ({ children }) => {

    const initializeData = () => {
        if(typeof localStorage !== "undefined") {
            const localData = localStorage.getItem('todos');
            return localData ? 
                JSON.parse(localData) : 
                [
                    {description: 'item 1', datetime: 'now', id: 1},
                    {description: 'item 2', datetime: 'now', id: 2},
                    {description: 'item 3', datetime: 'now', id: 3},
                    {description: 'item 4', datetime: 'now', id: 4}
                ];
        } else {
            return [{description: 'Could not connect to local storage, using shared state.', datetime: 'now', id: 1}];
        }
    };
    
    const [ toDos, setToDos ] = useState(initializeData);


    const addToDo = (description, datetime) => {
        setToDos([...toDos, { description, datetime, id: uuid() }]);
    }

    const removeToDo = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    }

    const updateToDo = (id, description, datetime) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.id == id);
        const newToDos = toDos;
        newToDos[toDoIndex].description = description;
        newToDos[toDoIndex].datetime = datetime;
        setToDos([...newToDos]);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos))
    }, [toDos]);

    // initialize single data object to pass in context
    const contextData = {
        toDos: {
            toDos,
            addToDo,
            removeToDo,
            updateToDo
        }
    }

    return (
        <ToDosContext.Provider value={ contextData }>
            { children }
        </ToDosContext.Provider>
    )
}

export default ToDosContextProvider;