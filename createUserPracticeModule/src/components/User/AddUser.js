import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [userList, setUserList] = useState([]);
  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");

  const usernameHandler = (event) => {
    setuserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setuserAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }
    const newUser = {
      userName,
      age: +userAge,
    };
    setUserList(prevItem=>{
        return[newUser, ...prevItem];
    });
    setuserAge("");
    setuserName("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameHandler}
          value={userName}
        />
        <label htmlFor="userAge">Age</label>
        <input
          id="userAge"
          type="number"
          min="0"
          step="1"
          onChange={userAgeHandler}
          value={userAge}
        />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
