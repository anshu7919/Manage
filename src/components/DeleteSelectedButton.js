import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Delete = ({ handleDeleteSelected, selectedRows }) => {
  return (
    <button
      className="delete-selected-button"
      onClick={handleDeleteSelected}
      disabled={selectedRows.length === 0}
    >
      <MdDeleteOutline/>
    </button>
  );
};

export default Delete;
