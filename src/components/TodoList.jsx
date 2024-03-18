import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-cyan-100 to-blue-500">
      {filteredTodos.length === 0 ? (
        <div className="text-center text-base p-4">
          <p>It looks like you haven't started any tasks yet.</p>
          <p>Get started by adding your first task!</p>
        </div>
      ) : (
        <>
          <ul>
            {filteredTodos.map((todo, index) => (
              <TodoItem key={index} todo={todo} index={index} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;
