import React from "react";
import "./AddMonsterCardButton.css";
import AddFillIcon from "remixicon-react/AddFillIcon";

function AddMonsterCardButton({ handleClick }) {
  return (
    <div className="add-monster-card-container">
      <div className="add-monster-card" onClick={handleClick}>
        <AddFillIcon className="add-monster-card-plus-icon"></AddFillIcon>
      </div>
    </div>
  );
}

export default AddMonsterCardButton;
