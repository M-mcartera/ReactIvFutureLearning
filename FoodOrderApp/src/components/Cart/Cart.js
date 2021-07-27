import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const [isVisible, setisVisible] = useState(false);
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const submitOrderFn = (userData) => {
    fetch("https://test-1d005-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items,
      }),
    });
  };
  const showCheckoutHandler = () => setisVisible(true);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={Math.random()}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideModal={props.onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>${cartContext.totalAmount.toFixed("2")}</span>
      </div>
      {isVisible && (
        <Checkout onCancel={props.onHideModal} onConfirm={submitOrderFn} />
      )}
      <div className={styles.actions}>
        {!isVisible && (
          <button className={styles["button--alt"]} onClick={props.onHideModal}>
            Cancel
          </button>
        )}
        {hasItems && !isVisible && (
          <button className={styles.button} onClick={showCheckoutHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
