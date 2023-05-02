import "./App.css";
import { Expenses } from "./component/Expenses/Expenses";
import expenses from "./data/ExpenseItems";

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;