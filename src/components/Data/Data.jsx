import React from "react";

const Data = ({ user, age }) => {
  return (
    <div>
      <ul>
        <li>
          My name is {user} and my age is {age}
        </li>
      </ul>
    </div>
  );
};

export default Data;
