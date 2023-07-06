import React from "react";

const DisplayArrayOfUsers = () => {
  let users = [
    { name: "Chakravarthy", id: 1 },
    { name: "Ram", id: 2 },
    { name: "Krishna", id: 3 },
    { name: "Seetha", id: 4 },
  ];

  const userNames = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });
  return (
    <div>
      <ol>{userNames}</ol>
    </div>
  );
};

export default DisplayArrayOfUsers;
