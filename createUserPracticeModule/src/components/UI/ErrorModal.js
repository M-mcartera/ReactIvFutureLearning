import React from "react";
import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Some text</h2>
        </header>
        <div className={styles.content}>
          <p>SOme text</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button">Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
