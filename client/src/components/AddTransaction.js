import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const handleTextChange = (e) => {
        let typed = e.target.value;
        setText(typed)
    }
    const handleAmountChange = (e) => {
        let typed = e.target.value;
        setAmount(typed);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random() * 10000000);
        let newTransaction = {
            id,
            text,
            amount: Number(amount)
        };
        addTransaction(newTransaction);
        setText('');
        setAmount(0)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit} id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input autoComplete="off" onChange={handleTextChange} value={text} type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input onChange={handleAmountChange} value={amount} type="number" id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
