import React, {
    createContext,
    useState, 
    useEffect,
} from 'react';
import { v4 as uuid } from 'uuid'

export const ToDosContext = createContext();

const ToDosContextProvider = ({ children }) => {

    const initializeData = () => {
        /*if(typeof localStorage !== "undefined") {
            const localData = localStorage.getItem('todos');
            return localData ? 
                JSON.parse(localData) : */
                return [
                    {
                        label: 'beansprouts',
                        description: '', 
                        category: 'produce',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'peanuts',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'pad thai sauce',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'creme cheese',
                        description: '', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'ensures',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'coffee beans',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'eggs',
                        description: '', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'ice cream',
                        description: 'sandwiches or a fun flavour', 
                        category: 'freezer',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'mozzarella ball',
                        description: '', 
                        category: 'artisan',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'fresh parmesan',
                        description: '', 
                        category: 'artisan',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'cooking oil',
                        description: 'peanut and/or canola', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'chicken wings',
                        description: 'pintos if I have the coupon', 
                        category: 'meat',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'Wing Sauce',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'yeast',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'soy sauce',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'steak',
                        description: '', 
                        category: 'meat',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'corn pops',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'lasagna noodles',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'cottage cheese',
                        description: 'small for lasagna', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'ground beef',
                        description: 'enough for lasagna, sheppards pie, and extra', 
                        category: 'meat',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'celary',
                        description: '', 
                        category: 'produce',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'green onions',
                        description: '', 
                        category: 'produce',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'ginger',
                        description: '', 
                        category: 'produce',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'mirin',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'miso paste',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'demi glaze',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'ravioli',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'frozen juice',
                        description: '', 
                        category: 'freezer',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'chocolate pudding',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'frozen mixed vegetables',
                        description: '', 
                        category: 'freezer',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'no name burritos',
                        description: '', 
                        category: 'freezer',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'tortillas',
                        description: '', 
                        category: 'bakery',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'penne and/or bowties',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'flour',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'bread',
                        description: '', 
                        category: 'bakery',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'cheese',
                        description: 'large marble', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'milk',
                        description: '', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'greek yogurt',
                        description: '', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'tsaziki',
                        description: '', 
                        category: 'fridge',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'greek spices',
                        description: 'for gyro', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                    {
                        label: 'panzarotti toppings',
                        description: '', 
                        category: 'fridge/produce/meats',
                        datetime: 'now', 
                        id: uuid(),
                    },,
                    {
                        label: 'sticky rice',
                        description: '', 
                        category: 'pantry',
                        datetime: 'now', 
                        id: uuid(),
                    },
                ];/*
        } else {
            return [{description: 'Could not connect to local storage, using shared state.', datetime: 'now', id: 1}];
        }*/
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
                sortedArray = updatedToDos.sort((a, b) => a.label.localeCompare(b.description));
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