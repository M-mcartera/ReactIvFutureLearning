import React from "react";

import MealForm from "./MealForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealForm id={props.id}/>
    </li>
  );
};

export default MealItem;
