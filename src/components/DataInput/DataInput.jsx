import React, { useState } from "react";
// Styles
import "./DataInput.css";

const DataInput = () => {
  const [dataInput, setDataInput] = useState();

  const dataInputHandler = (data) => {};

  return (
    <>
      <div className="data-container">
        <form onSubmit={() => {}} className="data-container__block">
          <p className="data-container__user">Username</p>
          <input
            className="data-container__input"
            type="text"
            placeholder="Enter your name..."
          ></input>
          <p className="data-container__user">Age (Years)</p>
          <input
            className="data-container__input"
            type="number"
            placeholder="Add you age..."
          ></input>
          <button type="submit" className="data-container__button">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default DataInput;
