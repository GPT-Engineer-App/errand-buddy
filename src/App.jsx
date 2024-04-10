import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-pink-400 to-purple-500" data-theme="cupcake">
      <h1 className="text-4xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Enter a todo" className="input input-bordered flex-grow mr-2 shadow-lg" value={inputValue} onChange={handleInputChange} />
        <button className="btn btn-primary shadow-lg" onClick={handleAddTodo}>
          <FaPlus className="mr-2" />
          Add
        </button>
      </div>
      <ul className="list-disc pl-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-4 text-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="mr-4">{todo}</span>
            <button className="btn btn-error btn-sm shadow-md transition-colors duration-200 ease-in-out hover:bg-red-600" onClick={() => handleDeleteTodo(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
