import React, {FC, FormEvent, useRef} from "react";
import styles                         from "./compStyles/NewTodo.module.css"

export const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    
    const enteredText = todoTextInputRef.current!.value;
    
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    
    props.onAddTodo(enteredText);
    
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