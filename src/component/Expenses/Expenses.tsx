import { ExpenseItem } from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export const Expenses = ({ expenses }: { expenses: Expense[] }) => {
    return (
        <Card className="expenses">
          {expenses.length === 0 ? (
            <h2>No Expenses found.</h2>
          ) : (
            expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          )}
        </Card>
      );
    };
