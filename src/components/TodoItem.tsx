import React from "react";
import styles from "./compStyles/TodoItem.module.css";

export const TodoItem: React.FC<{
  text: string;
  id: string;
  onClick: () => void;
}> = (props) => {
  return (
    <>
      <li className={styles.item} onClick={props.onClick}>
        <p>{props.text}</p>
        <p>{props.id}</p>
      </li>
    </>
  );
};
