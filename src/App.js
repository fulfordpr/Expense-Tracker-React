import Expenses from './components/Expenses/Expenses.component.jsx'
import NewExpense from './components/NewExpense/NewExpense.component.jsx'
import './App.css'


function App() {
  const expenseItems = [
    {
      id: 'e1',
      title:'Electric Bill',
      amount:234.56,
      date: new Date(2021,10,28)
    },
    {
      id: 'e2',
      title:'Car Payment',
      amount:257.54,
      date: new Date(2021,10,29)
    },
    {
      id: 'e3',
      title:'Mortgage',
      amount:796.54,
      date: new Date(2021,11,1)
    }

  ]


  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses={expenseItems} />
    </div>
  );
}

export default App;
