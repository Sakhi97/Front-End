import React from 'react';
import Todolist from './components/Todolist';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
      <AppBar position='static'>
        <Toolbar>
          <Typography>
            My todos
          </Typography>
        </Toolbar>
      </AppBar>
      <Todolist  />
     
    </div>
  );
}

export default App;