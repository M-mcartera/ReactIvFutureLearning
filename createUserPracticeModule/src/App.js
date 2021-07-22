import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const saveUserData = (user) => {
    const newUser = { ...user };
    setUserList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onsaveUserData={saveUserData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
