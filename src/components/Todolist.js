import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todolist() {
    const [todo, setTodo] = React.useState({ description: '', priority: '', date: null});
    const [todos, setTodos] = React.useState([]); // Two different exports. File can contain only one default export. To import something which is not exported with default we can use import React, ({useState})
    const gridRef = React.useRef();
    

    const [columnDefs] = React.useState([
      { field: 'description', headerName: 'My todos', sortable: true, filter: true, floatingFilter: true},
      { field: 'priority', sortable: true, filter: true, floatingFilter: true, cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
      { field: 'date', sortable: true, filter: true, floatingFilter: true}
      
    ])


    function handleAddTodo() {
      if (todo.date !== null) {
        setTodos([{
          ...todo,
          date: new Date(todo.date).toLocaleDateString('fi-FI')
        }, ...todos]);
        setTodo({
          description: '',
          priority: '',
          date: null
        });
      } else {
        alert('Please select a date for your todo.');
      }
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

      <Stack 
        direction="row"
        spacing={2} 
        justifyContent="center"
        alignItems="center" >


        <TextField
          label='Description'
          variant="standard"
          value={todo.description}
          onChange={e => setTodo({...todo, description: e.target.value})} 
        />

        <TextField
          label='Priority'
          variant="standard"
          value={todo.priority}
          onChange={e => setTodo({...todo, priority: e.target.value})} 
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        
        <DatePicker
          label="Date"
          value={todo.date}
          onChange={(newValue) => setTodo({ ...todo, date: newValue}) }
          />
          </LocalizationProvider>
        <Button 
        onClick={handleAddTodo} 
        variant="contained">Add Todo
        </Button>

        <Button 
        onClick={handleDeleteTodo} 
        variant="contained" 
        color="error">Delete
        </Button>

      </Stack>
       
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