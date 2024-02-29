// ToDoList.jsx
import React from 'react';
import "./ToDoList.Module.css";
import TodoItem from './ToDoItems';

function TodoList({ items, onTodoStatusChanged, onDelete }) {
    return (
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            onTodoStatusChanged={onTodoStatusChanged}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
  


export default TodoList;
