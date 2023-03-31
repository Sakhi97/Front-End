import React from 'react';
import Todolist from './components/Todolist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('one');

  const handleAddTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDeleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="App">
      
      <AppBar position="static">
        
        <Toolbar>
          <Typography>  <h1>My todos</h1></Typography>
        </Toolbar>
        
      </AppBar>

      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="Todos" />
      </Tabs>
      {value === 'one' && <div> <h1>Welcome home!</h1> </div>}
      {value === 'two' && <div> <Todolist todos={todos} onAddTodo={handleAddTodo} onDeleteTodo={handleDeleteTodo} /> </div>}

      
      
      
    </div>
    
  );
}

export default App;