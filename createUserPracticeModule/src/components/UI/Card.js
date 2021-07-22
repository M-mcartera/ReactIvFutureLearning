import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const classname = `${styles.card} ${props.className}`;
  return <div className={classname}>{props.children}</div>;
};

export default Card;
