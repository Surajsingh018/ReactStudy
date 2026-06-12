import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Clark" },
    { id: 3, name: "jane" },
    { id: 4, name: "Henery" },
    { id: 5, name: "Bruce" },
  ];
  return (
    <>
      <h1>Learn list in react</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <h3>{users.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
