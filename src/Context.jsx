import axios from "axios";
import { useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const DentistStates = createContext()

const InitialDentistState = {
    dentistList: [],
    dentist: {}
}

const dentistReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {dentistList: action.payload, dentist: state.dentist}
        case 'GET_POKE':
            return {dentistList: state.dentistList, dentist: action.payload}
        default: 
            throw new Error()
    }
} 

const Context = ({children}) => {
    const [dentistState, dentistDispatch] = useReducer(dentistReducer, InitialDentistState)
    const urlList = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    useEffect(() => {
        axios(urlList)
        .then(res => dentistDispatch({type: 'GET_LIST', payload: res.data.results}))
        .catch(err => console.log(err))
    }, [])

    console.log(dentistState)
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