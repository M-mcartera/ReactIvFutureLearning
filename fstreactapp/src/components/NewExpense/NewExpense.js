import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const saveExpenseData = (expenseData) =>{
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(newExpenseData);
        console.log(newExpenseData);
    }

    const showVisible = () =>{
        setIsVisible(true);
    }
    const hideVisible = () =>{
        setIsVisible(false);
    }
  return (
    <div className="new-expense">
       {!isVisible && <button onClick={showVisible}>Add new Expense</button>}
     {isVisible && <ExpenseForm onSaveExpenseData={saveExpenseData} stopVisible={hideVisible}/> }
    </div>
  );
};

export default NewExpense;
