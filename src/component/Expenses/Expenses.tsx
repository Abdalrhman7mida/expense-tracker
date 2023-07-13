import { ExpenseItem } from "./ExpenseItem";
import Card from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import { fExpence } from "../../types/types";

export const Expenses = ({ expenses }: { expenses: fExpence[] }) => {
  const [expenseFilterYear, setExpenseFilterYear] = useState<string>("2020");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseFilterYear
  );

  const dropdownChangeHandler = (expenseYear: string) => {
    setExpenseFilterYear(expenseYear);
    console.log(expenseYear + " in Expenses.tsx");
  };

  const getFilterInfo = (year: string): string => {
    const notIncludedYears: string[] = ["2019", "2020", "2021", "2022"].filter(
      (y) => y !== year
    );
    return `not included years: ${notIncludedYears.join(", ")}`;
  };

  const yearInfo: { [key: string]: string } = {
    "2019": "not included years: 2020, 2021, 2022",
    "2020": "not included years: 2019, 2021, 2022",
    "2021": "not included years: 2019, 2020, 2022",
    "2022": "not included years: 2019, 2020, 2021",
  };

  // Derived or Computed state: state that is derived from other state, we don't need to define a state for it.
  // it's re rendered when the state it depends on changes.
  const filterInfo: string = yearInfo[expenseFilterYear];

  return (
    <div>
      <ExpenseFilter
        onChangeFilter={dropdownChangeHandler}
        selectedYear={expenseFilterYear}
      />
      <p>{filterInfo}</p>
      <Card className="expenses">
        {expenses.length === 0 ? (
          <h2>No Expenses found.</h2>
        ) : (
          filteredExpenses.length === 0 ? (
            <h2>No Expenses found for this year !</h2>
          ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ))}
      </Card>
    </div>
  );
};
