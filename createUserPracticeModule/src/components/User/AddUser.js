import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setuserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setuserAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please insert a valid data (not empty)',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please insert a valid age'
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      userName: userName.charAt(0).toUpperCase() + userName.slice(1),
      age: +userAge,
    };
    props.onsaveUserData(newUser);
    setuserAge("");
    setuserName("");
  };
  const closeModalHandler = () =>{
    setError(null);
  }

  return (
    <div>
    {error &&<ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
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
    </div>  
  );
};

export default AddUser;
