import React from 'react';
import ExpenseForm from './ExpenseForm.component.jsx'
import './NewExpense.styles.css'

const NewExpense = () => {
    return(
    <div className="new-expense">
        <ExpenseForm/>
    </div>
    )

}


export default NewExpense;