import React from 'react';

export default function Todotable({ todos, deleteTodo }) {


  return (
  
      <table>
        <tbody>
          { 
              todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.date}</td>
                <td>
                 <button onClick={() => deleteTodo(index)}>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  );
}