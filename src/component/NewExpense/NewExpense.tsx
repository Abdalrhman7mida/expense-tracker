import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

interface NewExpensePros {
  onAddExpense: (expense: {
    title: string;
    amount: number;
    date: Date;
    id: string;
  }) => void;
}

const NewExpense = (props: NewExpensePros) => {
  const saveExpenseDataHandler = (enteredExpenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
