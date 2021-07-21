import React from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
