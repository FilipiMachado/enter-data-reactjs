import React from "react";
// Styles
import "./Data.css";

const Data = ({ user, age }) => {
  return (
    <>
      <ul>
        <li>
          My name is {user} and my age is {age}.
        </li>
      </ul>
    </>
  );
};

export default Data;
