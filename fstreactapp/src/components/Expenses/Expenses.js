import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
const Expenses = (props) => {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYear = (filteredYearData) => {
    setFilteredYear(filteredYearData);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onSaveFilterYear={filterYear}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
