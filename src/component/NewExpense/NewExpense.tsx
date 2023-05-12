import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData: {
        title: string;
        amount: string;
        date: Date;
      }) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData, "parent component");
    }
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;