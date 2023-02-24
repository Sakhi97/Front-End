import React from 'react';
import Todolist from './components/Todolist';
import Todotable from './components/Todotable';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDeleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div className="App">
      <Todolist onAddTodo={handleAddTodo} />
      <Todotable todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;