import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UseAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuthContext must be inside an AuthContextProvider');
    }

    return context;
}