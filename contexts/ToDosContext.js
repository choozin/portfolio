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
                    {
                        label: 'title1',
                        description: 'item 1', 
                        category: 'a',
                        datetime: 'now', 
                        id: 1
                    },
                    {
                        label: 'title2',
                        description: 'item 2', 
                        category: 'a',
                        datetime: 'now', 
                        id: 2
                    },
                    {
                        label: 'titlea',
                        description: 'item 3', 
                        category: 'b',
                        datetime: 'now', 
                        id: 3
                    },
                    {
                        label: 'titleb',
                        description: 'item 4', 
                        category: 'b',
                        datetime: 'now', 
                        id: 4
                    }
                ];
        } else {
            return [{description: 'Could not connect to local storage, using shared state.', datetime: 'now', id: 1}];
        }
    }; 
    
    const [ initialToDos, setInitialToDos ] = useState(initializeData);
    const [ updatedToDos, setUpdatedToDos] = useState(initialToDos);


    const addToDo = (label, description, category, datetime) => {
        setUpdatedToDos([...updatedToDos, { label, description, category, datetime, id: uuid() }]);
    }

    const removeToDo = (id) => {
        setUpdatedToDos(updatedToDos.filter(todo => todo.id !== id));
    }

    const updateToDo = (id, description, datetime) => {
        const toDoIndex = updatedToDos.findIndex(toDo => toDo.id == id);
        const newToDos = updatedToDos;
        newToDos[toDoIndex].description = description;
        newToDos[toDoIndex].datetime = datetime;
        setUpdatedToDos([...newToDos]);
    }

    const sortToDos = (sortType) => {
        let sortedArray = [];
        switch (sortType) {
            case 'category': 
                //
                sortedArray = updatedToDos.sort((a, b) => a.category.localeCompare(b.category));
                setUpdatedToDos([...sortedArray]);
                break;
            case 'alphabetically': 
                //
                sortedArray = updatedToDos.sort((a, b) => a.description.localeCompare(b.description));
                setUpdatedToDos([...sortedArray]);
                break;
            default: 
                //
                break;
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(updatedToDos))
    }, [updatedToDos]);

    // initialize single data object to pass in context
    const contextData = {
        toDos: {
            updatedToDos,
            addToDo,
            removeToDo,
            updateToDo,
            sortToDos,
        }
    }

    return (
        <ToDosContext.Provider value={ contextData }>
            { children }
        </ToDosContext.Provider>
    )
}

export default ToDosContextProvider;