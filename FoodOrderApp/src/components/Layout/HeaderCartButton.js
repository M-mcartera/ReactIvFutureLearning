import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const ctx = useContext(CartContext);

  //preluam nr de iteme din shopping cart
  const numberofItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount; //item.amount -> din obiectul creat in context item
  }, 0);
  return (
      <button className={styles.button} onClick={props.onClick}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={styles.badge}>{numberofItems}</div>
      </button>
  );
}; 
export default HeaderCartButton;    
