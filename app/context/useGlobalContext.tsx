"use client";
import { createContext, useContext ,ReactNode, Dispatch, SetStateAction, useEffect, useState} from "react";

type AppProviderProps = {
    children:ReactNode;
}

type contextValue = {
    topRated: Array<any>;
}

const AppContext = createContext<contextValue>({
    topRated: []
})

export const AppProvider = ({children}) =>{
    const [topRated, setTopRated] = useState([]);

    const fetchTopRated = async () =>{
        try {
            const response = await fetch("https://api.themoviedb.org/3/account/12668959/rated/movies?language=en-US&page=1&sort_by=created_at.asc");
            const data = await response.json();
            setTopRated(data);
        } catch (error) {
            console.log("data failed to fetch");
        }
    }

    console.log(topRated);

    useEffect(() =>{
        fetchTopRated();
    }, [])

    const contextValue:contextValue = {
        topRated,
    }

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
  
  export { AppContext };
