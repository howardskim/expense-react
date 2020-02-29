import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleTextChange = (e) => {
        let typed = e.target.value;
        setText(typed)
    }
    const handleAmountChange = (e) => {
        let typed = e.target.value;
        setAmount(typed);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input onChange={handleTextChange} value={text} type="text" id="text" placeholder="Enter text..." />
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
