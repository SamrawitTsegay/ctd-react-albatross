import React from 'react';
var todoList = [
  {"id": 1,
    "title": "assignment"
  },
  {"id": 2,
    "title": "Complete assignment",
  },
  {"id": 3,
    "title": "Complete",
  }

];
function App() {
  return (
    <div>
    <h1>Todo List</h1>
    <ul>
      {
      todoList.map(props =>
      <li key ='id'>{props.title}</li>
      ) 
      }
    </ul>
    </div>
)}

export default App;
