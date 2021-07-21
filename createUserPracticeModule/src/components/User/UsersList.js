import React from "react";

import styles from "./UserLIst.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.userName} with {user.age} age
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
