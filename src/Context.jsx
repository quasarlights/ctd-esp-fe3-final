import axios from "axios";
import { useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const DentistStates = createContext()

const InitialDentistState = {
    dentistList: [],
    dentist: {},
    favs: [],
    theme: "light"
}

const dentistReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, dentistList: action.payload}
        case 'GET_DENTIST':
            return {...state, dentist: action.payload}
        case 'ADD_FAVS':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            return {...state, favs: action.payload}
        case 'SET_FAVS':
            return {...state, favs: action.payload}
        case "TOGGLE_THEME":
            return {...state, theme: state.theme === "light" ? "dark" : "light",
                };
        default: 
            throw new Error()
    }
} 

const Context = ({children}) => {
    const [dentistState, dentistDispatch] = useReducer(dentistReducer, InitialDentistState)
    const urlList = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(urlList)
        .then(res => dentistDispatch({type: 'GET_LIST', payload: res.data}))
        .catch(err => console.log(err))

        // Cargar favs desde localStorage
    const loadedFavs = localStorage.getItem('favs');
    if (loadedFavs) {
        dentistDispatch({type: 'SET_FAVS', payload: JSON.parse(loadedFavs)});
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('favs', JSON.stringify(dentistState.favs))
    },[dentistState.favs])

    console.log(dentistState)
    console.log(dentistState.favs);
    return (
        <DentistStates.Provider value={{
            dentistState, dentistDispatch
        }}>
            {children}
        </DentistStates.Provider>
    )
}
export default Context

export const useDentistStates = () => useContext(DentistStates)