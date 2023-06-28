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
        case 'GET_DENTIST':
            return {dentistList: state.dentistList, dentist: action.payload}
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