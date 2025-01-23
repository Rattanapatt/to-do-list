import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // this is for prevent page to refresh

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="w-200 mx-auto">
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
          <button className="w-20 bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Add
          </button>
        </div>
      </form>
      <div className="m-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Todo-List</h1>
          <ul>
            {todos.length === 0 && (
              <h1 className="text-6xl text-gray-600/100 dark:gray-400/100">
                ~No Todos~
              </h1>
            )}
            {todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="flex justify-between items-center gap-4 m-4"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                      className="w-5 h-5 accent-emerald-400 cursor-pointer"
                    />
                    <span
                      className={
                        todo.completed
                          ? "line-through text-emerald-400"
                          : "text-white"
                      }
                    >
                      {todo.title}
                    </span>
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="mx-4 bg-red-800 text-white font-bold py-1 px-3 rounded hover:bg-red-950"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
