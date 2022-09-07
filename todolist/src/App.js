import React from 'react';
import './App.css';
import TodoList from './component/TodoList';


function App() {
  return (
    <div className="todo-app">
      <h1><marquee>This is a ToDo-List app created by Brij!</marquee></h1>
        <TodoList/>
    </div>
  );
}

export default App;
