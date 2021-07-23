import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnisHighlighted, setisHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  //preluam nr de iteme din shopping cart
  const numberofItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount; //item.amount -> din obiectul creat in context item
  }, 0);

  const btnStyles = `${styles.button} ${btnisHighlighted ? styles.bump : ""}`;
  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setisHighlighted(true);
    const timer = setTimeout(() => {
      setisHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnStyles} onClick={props.onClick}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={styles.badge}>{numberofItems}</div>
    </button>
  );
};
export default HeaderCartButton;
