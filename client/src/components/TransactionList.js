import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionList = () => {
    const { getTransaction, transactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransaction()
    }, [])
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((transaction) => {
                    return (
                        <Transaction key={transaction._id} transaction={transaction} />
                    )
                })}
            </ul>   
        </div>
    )
}
