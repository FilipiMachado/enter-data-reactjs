import React, { useState } from "react";
// Components
import Data from "../Data/Data";
// Styles
import "./DataInput.css";

const DataInput = () => {
  const [userDataInput, setUserDataInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserDataInput(() => {});
  };

  return (
    <>
      <div className="data-container">
        <form onSubmit={handleSubmit} className="data-container__block">
          <p className="data-container__user">Username:</p>
          <input
            className="data-container__input"
            type="text"
            placeholder="Enter your name..."
          />
          <p className="data-container__user">Age (Years):</p>
          <input
            className="data-container__input"
            type="number"
            placeholder="Enter your age..."
          />
          <button type="submit" className="data-container__button">
            Add User
          </button>
        </form>
      </div>
      <Data />
    </>
  );
};

export default DataInput;
