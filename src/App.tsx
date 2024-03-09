import React   from 'react';
import {Todos} from "./components/Todos";
import {Todo}  from "./models/todo";


function App() {
  
  const todos: Todo[] = [
    {id: "one", text: "one"},
    {id: "two", text: "two"},
    {id: "three", text: "three"},
    {id: "four", text: "four"},
  ]
  
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
