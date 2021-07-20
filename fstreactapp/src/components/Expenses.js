import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
    const expenses = props.items;
  return (
    <div className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
