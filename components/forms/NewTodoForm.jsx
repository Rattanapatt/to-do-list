import React, { useState } from "react";
import { AddButton } from "../AddButton";

export const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // this is for prevent page to refresh
    if (newItem.trim() === "") {
      setAlertMessage("Item cannot be blank!");
      setTimeout(() => setAlertMessage(null), 3000);
      setNewItem("");
      return;
    }

    onSubmit(newItem.trim());

    setNewItem("");
  }

  return (
    <>
      {alertMessage && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow">
          {alertMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="m-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="item" className="text-2xl font-bold">
            New Item
          </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            maxLength={50}
            className="border-gray-400 rounded-md px-2 py-1 placeholder-gray-500 bg-gray-900 focus:outline-none focus:bg-gray-950 transition-colors duration-500"
            placeholder="Enter a new item"
          />
          <AddButton />
        </div>
      </form>
    </>
  );
};
