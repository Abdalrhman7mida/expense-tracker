import "./App.css";
import { Expenses } from "./component/Expenses/Expenses";
import expenses from "./data/ExpenseItems";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;