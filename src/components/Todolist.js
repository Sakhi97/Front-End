import React from 'react';


import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todolist() {
    const [todo, setTodo] = React.useState({ description: '', priority: '', date: ''});
    const [todos, setTodos] = React.useState([]); // Two different exports. File can contain only one default export. To import something which is not exported with default we can use import React, ({useState})
    const gridRef = React.useRef();
    

    const [columnDefs] = React.useState([
      { field: 'description', headerName: 'My todos', sortable: true, filter: true, floatingFilter: true},
      { field: 'priority', sortable: true, filter: true, floatingFilter: true, cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
      { field: 'date', sortable: true, filter: true, floatingFilter: true}
      
    ])

    const handleAddTodo = () => {
        setTodos([todo, ...todos ]);
        setTodo({ description: '', priority: '', date: ''});
    }

   

    const handleDeleteTodo = () => {
      if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
      index != gridRef.current.getSelectedNodes()[0].id))
      }
      else {
      alert('Select row first');
      }
      };
    
    return(
        <div>
        <h1>My todos</h1>
        <input 
          placeholder='Description'
          value={todo.description}
          onChange={e => setTodo({...todo, description: e.target.value})} 
        />

        <input 
          placeholder='Priority'
          value={todo.priority}
          onChange={e => setTodo({...todo, priority: e.target.value})} 
        />

        <input 
          type='date'
          placeholder='Date'
          value={todo.date}
          onChange={e => setTodo({...todo, date: e.target.value})} 
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleDeleteTodo}>Delete</button>
       
        <div className='ag-theme-material' style={{ height: 600, width: 600, margin: 'auto'}}>
          <AgGridReact
          animateRows = {true}
          ref={gridRef}
          onGridReady= { params => gridRef.current = params.api }
          rowSelection="single" 
          rowData={todos}
          columnDefs={columnDefs}

          />

        </div>
      </div>
    );

}