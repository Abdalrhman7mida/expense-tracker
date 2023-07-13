import "./App.css";
import { Expenses } from "./component/Expenses/Expenses";
import DUMMY_EXPENSES from "./data/ExpenseItems";
import NewExpense from "./component/NewExpense/NewExpense";
import { fExpence } from "./types/types";

const addExpenseHandler = (expense: {
  title: string;
  amount: number;
  date: Date;
  id: string;
}) => {
  console.log("in App js");
  console.log(expense);
};

const App = () => {
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
