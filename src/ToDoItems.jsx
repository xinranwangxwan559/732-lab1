// TodoItem.jsx
import React from 'react';

function TodoItem({ item, index, onTodoStatusChanged, onDelete }) {
  return (
    <li
      className={`todo-item ${item.isComplete ? 'complete' : 'incomplete'}`}
    >
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => onTodoStatusChanged(index, !item.isComplete)}
      />
      {item.description} {item.isComplete && "(Done!)"}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
