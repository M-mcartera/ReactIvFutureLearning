import React, { useRef, useState } from "react";

import styles from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const inputRef = useRef();
  const [amountisValid, setamountisValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setamountisValid(false);
      return;
    }
    props.onAddToCard(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "10",
          step: "1",
        }}
      />
      <button>+Add</button>
      {!amountisValid && <p>Please enter a valid amount 1 - 10</p>}
    </form>
  );
};

export default MealForm;
