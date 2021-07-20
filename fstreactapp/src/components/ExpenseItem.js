import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  const title = props.title;
  const date = props.date;
  const amount = props.amount;

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
