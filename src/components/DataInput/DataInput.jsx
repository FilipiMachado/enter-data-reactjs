import React from "react";
// Styles
import "./DataInput.css";

const DataInput = () => {
  return (
    <>
      <div className="data-container">
        <form className="data-container__block">
          <p className="data-container__user">Username</p>
          <input
            className="data-container__input"
            placeholder="Enter your name..."
          ></input>
          <p className="data-container__user">Age (Years)</p>
          <input
            className="data-container__input"
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
