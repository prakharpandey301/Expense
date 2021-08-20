import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Shampoo',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12), 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Table',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,updateExpanses]=useState(dummyExpenses);

  const addExpenseHandeler=(expense)=>{
    updateExpanses([expense,...expenses])
  }

  return (<div>
    <NewExpense onAddExpense={addExpenseHandeler}/>
    <Expenses item={expenses}/>;
  </div>
  )
}

export default App;
