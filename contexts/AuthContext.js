import React, {
    createContext,
    useState
} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState([]);

    const login = data => {
        setLoggedIn(true);
        setUserDetails({
            name: 'Cam',
            role: 'Admin',
            notifications: 3,
        });
    }

    const logout = data => {
        setLoggedIn(false);
        setUserDetails([]);
    }

    // initialize single data object to pass in context
    const contextData = {
        status: {
            loggedIn,
            login,
            logout,
        },
        user: {
            userDetails,
            setUserDetails,
        }
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;