import React, { useState } from "react";
// Components
import Data from "../Data/Data";
// Styles
import "./DataInput.css";

const data = [
  { user: "MahBoeh", age: "20", id: 1 },
  { user: "Chrono", age: "48", id: 2 },
  { user: "Biluguinha", age: "35", id: 3 },
];

const DataInput = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const usernameChangeHandler = (e) => {
    setEnteredUser(e.target.value);
    console.log(e.target.value)
  };

  const ageChangeHandler = (e) => {
    setEnteredUser(e.target.value);
    console.log(e.target.value)
  };

  return (
    <>
      <div className="data-container">
        <form onSubmit={submitHandler} className="data-container__block">
          <p className="data-container__user">Username:</p>
          <input
            className="data-container__input"
            type="text"
            placeholder="Enter your name..."
            onChange={usernameChangeHandler}
          />
          <p className="data-container__user">Age (Years):</p>
          <input
            className="data-container__input"
            type="number"
            placeholder="Enter your age"
            onChange={ageChangeHandler}
          />
          <button type="submit" className="data-container__button">
            Add User
          </button>
        </form>
      </div>
      {data.length === 0 && <p>You don't have data</p>}
      {data.length > 0 && (
        <ul>
          {data.map((data) => {
            return <Data user={data.user} age={data.age} key={data.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default DataInput;
