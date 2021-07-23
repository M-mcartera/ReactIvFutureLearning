import React from "react";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "text", amount: 2, price: 12.11 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideModal={props.onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>00.00</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideModal}>Cancel</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
