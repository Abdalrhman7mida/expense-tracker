import "./App.css";
import { Expenses } from "./component/Expenses/Expenses";
import DUMMY_EXPENSES from "./data/ExpenseItems";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";
import { fExpence } from "./types/types";


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: fExpence) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
