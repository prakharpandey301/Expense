import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
     const [enteredTitle,setEnteredTitle]=useState('');
     const [enteredAmount,setEnteredAmount]=useState('');
     const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });
    const newTitleHandeler=(event)=>
    {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    };

    const newAmountHandeler=(event)=>
    {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    };

    const newDateHandeler=(event)=>
    {
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    };
    const submitHandeler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandeler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type="text" value={enteredTitle} onChange={newTitleHandeler}/>
                </div>
                <div className="new-expense__control">
                    <lable>Price</lable>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={newAmountHandeler}/>
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" min='2021-01-01' max='2021-12-30' value={enteredDate} onChange={newDateHandeler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;