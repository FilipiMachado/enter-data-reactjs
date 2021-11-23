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
  const [dataList, setDataList] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    setEnteredUser("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <>
      <div className="data-container">
        <form onSubmit={submitHandler} className="data-container__block">
          <p className="data-container__user">Username:</p>
          <input
            id="username"
            className="data-container__input"
            type="text"
            placeholder="Enter your name..."
            value={enteredUser}
            onChange={usernameChangeHandler}
          />
          <p className="data-container__user">Age (Years):</p>
          <input
            id="age"
            className="data-container__input"
            type="number"
            placeholder="Enter your age"
            value={enteredAge}
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
      <Data />
    </>
  );
};

export default DataInput;
