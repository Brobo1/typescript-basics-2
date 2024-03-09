import React, {useState} from 'react';
import {Todos}           from "./components/Todos";
import {Todo}            from "./models/todo";
import {NewTodo}         from "./components/NewTodo";


function App() {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (todoText: string) => {
    setTodos(prevState => [new Todo(todoText), ...prevState]);
  };
  
  const removeTodoHandler = (id: string) => {
    setTodos(prevState => prevState.filter(value => (
      value.id !== id
    )))
  };
  
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos
        items={todos}
        onClick={removeTodoHandler}
      />
    </div>
  );
}

export default App;
