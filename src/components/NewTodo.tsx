import React, {FC, FormEvent, useContext, useRef} from "react";
import styles from "./compStyles/NewTodo.module.css"
import {TodosContext} from "../store/todos-context";


export const NewTodo: FC = () => {
	const todosCtx = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	
	function submitHandler(event: FormEvent) {
		event.preventDefault();
		const enteredText = todoTextInputRef.current!.value;
		if (enteredText.trim().length === 0) {
			//throw error
			return;
		}
		todosCtx.addTodo(enteredText);
	}
	
	return (
		<form
			onSubmit={submitHandler}
			className={styles.form}
		>
			<label htmlFor={"text"}>Todo text </label>
			<input
				type={"text"}
				id={"text"}
				ref={todoTextInputRef}
			/>
			<button>Add Todo</button>
		</form>
	);
};