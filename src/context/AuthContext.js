import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, { type, payload }) => {
    switch (type) {    
        case 'LOGIN':
            return { ...state, user: payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });
    console.log('AuthContext state:', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}