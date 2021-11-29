import ExpenseItem from "./ExpenseItem/ExpenseItem.component.jsx";
import Card from "../Card.component.jsx";
import "./Expenses.styles.css";

const Expenses = (props) => {
  return(
  <Card className="expenses">
    {props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </Card>
  )
};

export default Expenses;
