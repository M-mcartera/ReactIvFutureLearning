import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <li key={Math.random()} id={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideModal={props.onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>${cartContext.totalAmount.toFixed('2')}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideModal}>
          Cancel
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
