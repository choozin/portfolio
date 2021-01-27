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
                priority: 0,
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'peanuts',
                description: '',
                category: 'pantry',
                priority: 0,
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'pad thai sauce',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'creme cheese',
                description: '',
                category: 'fridge',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ensures',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'coffee beans',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'eggs',
                description: '',
                category: 'fridge',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ice cream',
                description: 'sandwiches or a fun flavour',
                category: 'freezer',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'mozzarella ball',
                description: '',
                category: 'artisan',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'fresh parmesan',
                description: '',
                category: 'artisan',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'cooking oil',
                description: 'peanut',
                category: 'pantry',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'chicken wings',
                description: 'pintys if I have the coupon',
                category: 'meat',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'Wing Sauce',
                description: '',
                category: 'pantry',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'yeast',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'soy sauce',
                description: '',
                category: 'pantry',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'steak',
                description: '',
                category: 'meat',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'corn pops',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'lasagna noodles',
                description: '',
                category: 'pantry',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'cottage cheese',
                description: 'small for lasagna',
                category: 'fridge',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ricotta cheese',
                description: 'small for lasagna',
                category: 'fridge',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ground beef',
                description: 'enough for lasagna, sheppards pie, and extra',
                category: 'meat',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'celary',
                description: '',
                category: 'produce',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'green onions',
                description: '',
                category: 'produce',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ginger',
                description: '',
                category: 'produce',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'mirin',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'miso paste',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'demi glaze',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'ravioli',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'frozen pizza',
                description: '',
                category: 'freezer',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'frozen juice',
                description: '',
                category: 'freezer',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'chocolate pudding',
                description: '',
                category: 'pantry',
                priority: 0, datetime: 'now',
                id: uuid(),
            },
            {
                label: 'frozen mixed vegetables',
                description: '',
                category: 'freezer',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'no name burritos',
                description: '',
                category: 'freezer',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'tortillas',
                description: 'spinach',
                category: 'bakery',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'penne and/or bowties',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'flour',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'bread',
                description: '',
                category: 'bakery',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'cheese',
                description: 'large marble',
                category: 'fridge',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'milk',
                description: '',
                category: 'fridge',
                priority: 1, datetime: 'now',
                id: uuid(),
            },
            {
                label: 'greek yogurt',
                description: '',
                category: 'fridge',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'tsaziki',
                description: '',
                category: 'fridge',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'greek spices',
                description: 'for gyro',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'panzarotti toppings',
                description: '',
                category: 'fridge/produce/meats',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'sticky rice',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'olive oil',
                description: '',
                category: 'pantry',
                priority: 0, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'lunch meat',
                description: '',
                category: 'artisan',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'cucumber',
                description: '',
                category: 'produce',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
            {
                label: 'onion',
                description: '',
                category: 'produce',
                priority: 1, 
                datetime: 'now',
                id: uuid(),
            },
        ];/*
        } else {
            return [{description: 'Could not connect to local storage, using shared state.', priority: 0, datetime: 'now', id: 1}];
        }*/
    };

    const [initialToDos, setInitialToDos] = useState(initializeData);
    const [updatedToDos, setUpdatedToDos] = useState(initialToDos);


    const addToDo = (label, description, category, priority, datetime) => {
        setUpdatedToDos([...updatedToDos, { label, description, category, priority, datetime, id: uuid() }]);
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
                sortedArray = updatedToDos.sort((a, b) => a.label.localeCompare(b.label));
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
        <ToDosContext.Provider value={contextData}>
            { children}
        </ToDosContext.Provider>
    )
}

export default ToDosContextProvider;