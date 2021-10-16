import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card.js';
import { useState } from "react";


function Expenses(props){
  const [filteredYear,setFilteredYear]=useState(2020);
  const filterChangeHandeler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
    return(
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandeler}/>
      {props.item.map((expense)=>(
        <ExpenseItem name={expense.title} date={expense.date} price={expense.amount}/>
      ))}
      {/* <ExpenseItem name={props.item[0].title} date={props.item[0].date} price={props.item[0].amount}/>
      <ExpenseItem name={props.item[1].title} date={props.item[1].date} price={props.item[1].amount}/>
      <ExpenseItem name={props.item[2].title} date={props.item[2].date} price={props.item[2].amount}/>
      <ExpenseItem name={props.item[3].title} date={props.item[3].date} price={props.item[3].amount}/> */}
    </Card>
    );
}
export default Expenses;