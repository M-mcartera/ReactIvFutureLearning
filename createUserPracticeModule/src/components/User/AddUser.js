import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameInput = useRef();
  const userageInput = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    //instead of using state
    const username = usernameInput.current.value;
    const userage = userageInput.current.value;
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please insert a valid data (not empty)",
      });
      return;
    }
    if (+userage < 1) {
      setError({
        title: "Invalid age",
        message: "Please insert a valid age",
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      userName: username.charAt(0).toUpperCase() + username.slice(1),
      age: +userage,
    };
    props.onsaveUserData(newUser);
    usernameInput.current.value = "";
    userageInput.current.value = "";
  };
  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInput} />
          <label htmlFor="userAge">Age</label>
          <input
            id="userAge"
            type="number"
            min="0"
            step="1"
            ref={userageInput}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
