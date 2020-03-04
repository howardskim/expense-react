//create our context... one single global state
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
    
}

//create Context
export const GlobalContext = createContext(initialState);

//create Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //need actions to make calls to reducer

    async function deleteTransaction(id){
        try {
            const response = await axios.delete(`api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            }); 
        }
    };
    async function addTransaction(transaction){
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await axios.post("api/v1/transactions", transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: response.data.data
            })
            
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            });        
        }
    }
    async function getTransaction(){
        try{
            const response = await axios.get("api/v1/transactions");
            dispatch({
                type: 'GET_TRANSACTION',
                payload: response.data.data
            })
        } catch (error){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            getTransaction,
            deleteTransaction,
            addTransaction,
            error: state.error,
            loading: state.loading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}