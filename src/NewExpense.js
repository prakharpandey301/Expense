import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const saveExpenseHandeler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return(
        <div class="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandeler}/>
        </div>
    )
}
export default NewExpense;