import React from 'react'

export const Transaction = (props) => {
    let { id, text, amount } = props.transaction
    const sign = amount < 0 ? '-' : '+';
    return (
        < li className={sign === '-' ? 'minus' : 'plus'}>
            {text} <span> {sign}${Math.abs(amount)}</span><button class="delete-btn">x</button>
        </li> 
    )
}
