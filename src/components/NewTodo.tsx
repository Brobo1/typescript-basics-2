import React, {FormEvent, useRef} from "react";

export const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    
    const enteredText = todoTextInputRef.current!.value;
    
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    
    
  }
  
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={"text"}>Todo text</label>
      <input
        type={"text"}
        id={"text"}
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};