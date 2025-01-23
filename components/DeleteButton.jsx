import React from "react";

export const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mx-4 bg-red-800 text-white font-bold py-1 px-3 rounded hover:bg-red-950"
    >
      Delete
    </button>
  );
};
