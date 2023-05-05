import { useState } from "react";

export const ExpenseForm = () => {

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="title"
            id="description"
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
