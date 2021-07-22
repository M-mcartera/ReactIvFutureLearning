import React from "react";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
       <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;
