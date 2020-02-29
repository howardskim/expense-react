import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    let { id, text, amount } = props.transaction
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {text} <span> {sign}${Math.abs(amount)}</span>
            <button onClick={() => deleteTransaction(id)} class="delete-btn">x</button>
        </li> 
    )
}
