import React from 'react';

export default function Todolist(props) {
  const [todo, setTodo] = React.useState({ description: '', date: '' });

  const handleAddTodo = () => {
    props.onAddTodo(todo);
    setTodo({ description: '', date: '' });
  };

  return (
    <div>
      <h1>My todos</h1>
      <input
        placeholder="Description"
        value={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Date"
        value={todo.date}
        onChange={(e) => setTodo({ ...todo, date: e.target.value })}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
