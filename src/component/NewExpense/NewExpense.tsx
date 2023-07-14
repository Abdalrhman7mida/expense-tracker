import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import {fExpence} from "../../types/types";

interface NewExpensePros {
  onAddExpense: (expense: fExpence) => void;
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
