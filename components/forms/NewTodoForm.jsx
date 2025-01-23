import React, { useState } from "react";
import { AddButton } from "../AddButton";

export const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault(); // this is for prevent page to refresh
    if (newItem.trim() === "") {
      alert("Item cannot be blank!");
      setNewItem("");
      return;
    }

    onSubmit(newItem.trim());

    setNewItem("");
  }

  return (
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
          className="border-gray-400 rounded-md px-2 py-1 placeholder-gray-500 bg-gray-800 focus:outline-none focus:bg-gray-950 transition-colors duration-500"
          placeholder="Enter a new item"
        />
        <AddButton />
      </div>
    </form>
  );
};
