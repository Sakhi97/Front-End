import React from 'react';

export default function Todotable(props) {
  const handleDeleteTodo = (index) => {
    props.onDeleteTodo(index);
  };

  return (
    <div>
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => handleDeleteTodo(index)}>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}