import React, { useState } from "react";

import UserForm from "./Users/UserForm";
import Users from "./Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [{ id: Math.random().toString(), ...newUser }, ...prevUsers]);
  };

  return (
    <div style={{ width: "100vw" }}>
      <UserForm onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
