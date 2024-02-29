import React from "react";
import AboutMe from "./AboutMe";
import ToDoList from "./ToDoList";
import LightBulb from "./Lightbulb";
import { useState } from "react";
import "./App.css";
import NewToDoItem from "./NewToDoItem";


// Initial state for the to-do list
const initialTodos = [
  { description: "Finish lecture", isComplete: true },
  { description: "Do homework", isComplete: false },
  { description: "Sleep", isComplete: true },
];


function App() {

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoStatusChanged = (index, isComplete) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isComplete: isComplete } : todo
    );
    setTodos(updatedTodos);
    console.log(`Todo at index ${index} has been marked as ${isComplete ? 'complete' : 'incomplete'}.`);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  return (
    <div>
      <h1>About me</h1>
      {/* TODO: Add your AboutMe component here */}
      <AboutMe name = "Chris" age = "28" favoriteFood = "BBQ" />

      <h1>My light bulb</h1>
      {/* TODO: Add your LightBulb component here */}
      <LightBulb />
     
     <h1>Add new to do </h1>
     <NewToDoItem onAdd={addTodo} /> 

      <h1>My todos</h1>
      {/* TODO: Add your todo list here */}
      <ToDoList 
        items={todos} 
        onTodoStatusChanged={handleTodoStatusChanged} 
        onDelete={deleteTodo}
      />
      
   

    </div>
  );
}

export default App;
