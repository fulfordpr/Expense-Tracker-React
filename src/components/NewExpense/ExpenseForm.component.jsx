import React, { useState } from 'react';
import './ExpenseForm.styles.css'

const ExpenseForm = () =>{
    // const [expenseTitle, setExpenseTitle] = useState('');
    // const [expenseAmount, setExpenseAmount] = useState('');
    // const [expenseDate, setExpenseDate] = useState('');
    const [userInput, setUserInput] = useState({
        expenseTitle: '',
        expenseAmount:'',
        expenseDate: ''
    })

    const titleChangeHandler = (event) =>{
        setUserInput({...userInput, expenseTitle: event.target.value})
    }
    const amountChangeHandler = (event) =>{
        setUserInput({...userInput, expenseAmount: event.target.value})
    }
    const dateChangeHandler = (event) =>{
        setUserInput({...userInput, expenseDate: event.target.value})
        
    }

    const test = ()=>{
        console.log(userInput)
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={test}>+</button>
            </div>
        </form>
    )
}



export default ExpenseForm;