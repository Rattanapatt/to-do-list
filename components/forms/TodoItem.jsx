import React from "react";
import { DeleteButton } from "../DeleteButton";

export const TodoItem = ({
  id,
  completed,
  title,
  createdAt,
  toggleTodo,
  deleteTodo,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB");

  return (
    <li key={id} className="flex justify-between items-center gap-4 m-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="w-5 h-5 accent-emerald-400 cursor-pointer"
        />
        <span
          className={completed ? "line-through text-emerald-400" : "text-white"}
        >
          {title}
        </span>
      </label>
      <div>
        <span className="text-gray-400 text-sm">{formattedDate}</span>
        <DeleteButton onClick={() => deleteTodo(id)} />
      </div>
    </li>
  );
};
