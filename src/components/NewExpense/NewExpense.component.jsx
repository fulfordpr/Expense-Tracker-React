import React from 'react';
import ExpenseForm from './ExpenseForm.component.jsx'
import './NewExpense.styles.css'


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
    }

    return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )

}


export default NewExpense;