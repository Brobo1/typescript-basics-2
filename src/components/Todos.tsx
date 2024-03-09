import React, {FC, useContext} from "react";
import {TodoItem}              from "./TodoItem";
import styles                  from "./compStyles/Todos.module.css";
import {TodosContext}          from "../store/todos-context";


export const Todos: FC = () => {
	const todosCtx = useContext(TodosContext);
	
	return (
		<ul className={styles.ul}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					onClick={todosCtx.removeTodo.bind(null, item.id)}
					text={item.text}
				/>
			))}
		</ul>
	);
}
