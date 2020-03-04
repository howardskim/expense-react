import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from "../utils/format";

export const Transaction = (props) => {
    let { _id:id, text, amount } = props.transaction
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = amount < 0 ? '-' : '+';
    return (
        <li key={id} className={sign === '-' ? 'minus' : 'plus'}>
            {text} <span> {sign}${numberWithCommas(Math.abs(amount))}</span>
            <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
        </li> 
    )
}
