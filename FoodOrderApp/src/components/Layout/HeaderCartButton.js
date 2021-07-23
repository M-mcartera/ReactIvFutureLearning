import React from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
      <button className={styles.button} onClick={props.onClick}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={styles.badge}>3</div>
      </button>
  );
}; 
export default HeaderCartButton;    
