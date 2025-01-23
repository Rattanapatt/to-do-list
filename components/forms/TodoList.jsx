import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
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
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};
