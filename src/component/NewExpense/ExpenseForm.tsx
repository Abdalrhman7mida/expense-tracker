import { useState, ChangeEvent, FormEvent } from "react";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onAddExpense: (expenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => void;
}

export const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
   // Parse the input value to a number
   const amountValue = parseFloat(event.target.value);
   setEnteredAmount(amountValue);
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onAddExpense(expenseData);
    setEnteredAmount(0); // Reset to initial value
    setEnteredTitle("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="title"
            id="description"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2022-01-01"
            max="2023-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};
