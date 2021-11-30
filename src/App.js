import Expenses from "./components/Expenses/Expenses.component.jsx";
import NewExpense from "./components/NewExpense/NewExpense.component.jsx";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseItems: [
        {
          id: "e1",
          title: "Electric Bill",
          amount: 234.56,
          date: new Date(2021, 10, 28),
        },
        {
          id: "e2",
          title: "Car Payment",
          amount: 257.54,
          date: new Date(2021, 10, 29),
        },
        {
          id: "e3",
          title: "Mortgage",
          amount: 796.54,
          date: new Date(2021, 11, 1),
        },
      ],
      
    };  
  }

  

  render() {
    const AppendNewExpense = (newExpense)=>{
      this.state.expenseItems.push(newExpense)
    }
    return (
      <div className="App">
        <NewExpense onAddExpenseHandler={AppendNewExpense}/>
        <Expenses expenses={this.state.expenseItems} />
      </div>
    );
  }
}

export default App;
