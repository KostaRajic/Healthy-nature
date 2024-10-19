/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useContextAuth = () => {
    return useContext(Context);
}

export const UseContextProvider = ({ children }) => {

    const [selectedItems, setSelectedItems] = useState(null);

    const value = {selectedItems, setSelectedItems}

    return <div>
        <Context.Provider value = {value}>
            {children}
        </Context.Provider>
    </div>
}