import React, { useContext } from "react";

import MealForm from "./MealForm";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/CartContext";
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addToCart = (amountInput) => {
    const item = {
      name: props.title,
      price: props.price,
      amount: amountInput,
      id: props.id,
    };

    cartContext.addItem(item);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealForm id={props.id} onAddToCard={addToCart} />
    </li>
  );
};

export default MealItem;
