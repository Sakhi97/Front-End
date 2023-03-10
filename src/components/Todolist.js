import React from 'react';
import Todotable from './Todotable';

export default function Todolist() {
    const [todo, setTodo] = React.useState({ description: '', date: ''});
    const [todos, setTodos] = React.useState([]); // Two different exports. File can contain only one default export. To import something which is not exported with default we can use import React, ({useState})
    
    const handleAddTodo = () => {
        setTodos([todo, ...todos ]);
        setTodo({ description: '', date: ''});
    }

    const handleDeleteTodo = (row) =>{
        setTodos(todos.filter((todo, index) => index !== row))
    }
    
    return(
        <div>
        <h1>My todos</h1>
        <input 
          placeholder='Description'
          value={todo.description}
          onChange={e => setTodo({...todo, description: e.target.value})} 
        />
        <input 
          type='date'
          placeholder='Date'
          value={todo.date}
          onChange={e => setTodo({...todo, date: e.target.value})} 
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      <Todotable todos={todos} deleteTodo={handleDeleteTodo} />
      </div>
    );

}