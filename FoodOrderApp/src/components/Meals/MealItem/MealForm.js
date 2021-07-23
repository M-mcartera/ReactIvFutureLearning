import React from "react";

import styles from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
};

export default MealForm;
