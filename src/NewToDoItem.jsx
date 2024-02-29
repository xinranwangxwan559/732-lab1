// NewTodoItem.jsx
import React, { useState } from 'react';

function NewTodoItem({ onAdd }) {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (description.trim() !== '') {
      onAdd({ description, isComplete: false });
      setDescription(''); // Clear the input field after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new to-do"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default NewTodoItem;
