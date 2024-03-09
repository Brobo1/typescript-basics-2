import React      from "react";
import {Todo}     from "../models/todo";
import {TodoItem} from "./TodoItem";
import styles     from "./compStyles/Todos.module.css";


export const Todos: React.FC<{
  items: Todo[],
  onClick: (id: string) => void
}> = (props) => {
  
  return (
    <ul className={styles.ul}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          onClick={props.onClick.bind(null, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
}





