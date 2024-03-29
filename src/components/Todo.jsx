import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <>
      <div className="max-w-3xl mx-auto  p-4  bg-gradient-to-r from-purple-500 to-purple-900">
        <h2 className="mt-3 mb-6 text-2xl font-bold text-slate-200 text-center uppercase">
          TODO APP
        </h2>
        <div className="flex items-center justify-between gap-3 mb-6">
          <input
            id="addTodoInput"
            className=" w-[100%] p-2 rounded-md border-none ouline-none text-gray-400 bg-slate-900 focus:outline-none"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            className="border-none min-w-[5.25rem] py-2 px-4 font-bold bg-cyan-500 text-white rounded hover:bg-cyan-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            Add
          </button>
        </div>
        <div className="flex items-center mb-6 gap-3">
            <input
              className="w-[100%] p-2 rounded-md border-none ouline-none text-gray-400 bg-slate-900 focus:outline-none"
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="border-none min-w-[5.25rem] py-2 px-4 font-bold bg-cyan-500 text-white rounded hover:bg-cyan-600 focus:outline-none">
              {/* <BsSearch size={20} /> */}
              Search
            </button>
          </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <FilterButtons />
         
        </div>
      </div>
      <TodoList />
    </>
  );
};

export default Todo;
