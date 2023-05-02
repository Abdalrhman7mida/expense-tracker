import React from "react";
import './ExpenseDate.css'

interface Props {
    date: Date;
  }

export function ExpenseDate( {date: expenseDate}: Props) {
  const year = expenseDate.getFullYear();
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  // const formattedDate: string = `${month} ${year} ${day}`

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
