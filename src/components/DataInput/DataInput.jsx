import React from "react";
// Styles
import "./DataInput.css";

const DataInput = () => {
  return (
    <>
      <div className="data-container">
        <p className="user-data">Username</p>
        <input placeholder="Enter your name..."></input>
        <p className="user-data">Age (Years)</p>
        <input placeholder="Add you age..."></input>
      </div>
    </>
  );
};

export default DataInput;
