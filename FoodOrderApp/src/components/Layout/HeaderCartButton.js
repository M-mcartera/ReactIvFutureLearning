import React from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
      <button className={styles.button}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <div className={styles.badge}>3</div>
      </button>
  );
};
export default HeaderCartButton;    
