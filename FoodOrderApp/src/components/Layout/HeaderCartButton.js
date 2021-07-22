import React from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <React.Fragment>
      <button className={styles.button}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <div className={styles.badge}></div>
      </button>
    </React.Fragment>
  );
};
export default HeaderCartButton;
