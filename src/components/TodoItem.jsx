import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex  px-4 sm:items-center justify-between border-b-2 border-slate-900 py-2 gap-4  w-[100%]">
      <div className="flex items-center justify-start ">
        <span className="mr-4  text-gray-500">{index + 1}.</span>
        <span
          className={` break-all ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex justify-end items-center gap-4  ">
        <button
          className=" text-sm bg-slate-800 hover:bg-slate-900 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? (
            <FaToggleOff className="w-4 h-4" />
          ) : (
            <FaToggleOn className="w-4 h-4" />
          )}
        </button>
        <button
          className=" text-sm bg-red-500 hover:bg-red-600 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash className="w-4 h-4" />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 hover:bg-green-600 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck className="w-4 h-4" />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
