import React from "react";

interface Props {
    date: Date;
  }

export function ExpenseDate( {date: expenseDate}: Props) {
  const year = expenseDate.getFullYear();
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  // const formattedDate: string = `${month} ${year} ${day}`

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
