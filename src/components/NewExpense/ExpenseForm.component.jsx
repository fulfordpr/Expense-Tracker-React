import React, { useState } from 'react';
import './ExpenseForm.styles.css'

const ExpenseForm = (props) =>{
    // const [title, settitle] = useState('');
    // const [amount, setExpenseAmount] = useState('');
    // const [date, setExpenseDate] = useState('');
    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        date: ''
    })

    const titleChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{...prevState, title: event.target.value}
        })
    }
    const amountChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{...prevState, amount: event.target.value}
        })
    }
    const dateChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{...prevState, date: event.target.value}
        })
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = 
        {
            title: userInput.title,
            amount: Number(userInput.amount),
            date: new Date(userInput.date)
        }
        props.onSaveExpenseData(expenseData);

        setUserInput((prevState)=>{
            return{...prevState, title:''}
        })
        setUserInput((prevState)=>{
            return{...prevState, amount:''}
        })
        setUserInput((prevState)=>{
            return{...prevState, date:''}
        })
    
    }

    
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01"  value={userInput.date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">+</button>
            </div>
        </form>
    )
}



export default ExpenseForm;