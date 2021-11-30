import React, { useState } from "react";
import ExpenseDate from '../ExpenseDate/ExpenseDate.component.jsx'
import Card from '../../UI/Card.component.jsx'
import './ExpenseItem.styles.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
 
  const clickHandler = () => {
    setTitle('HAHA!')
  }
   return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
