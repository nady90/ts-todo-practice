import "./SingleTodo.scss";
// Importing libraries
import React, { useEffect, useRef, useState } from "react";
// Importing Components
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
// Importing Types
import { Todo } from "../../models";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodot, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    setEdit(!edit);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleEditing = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodot } : todo
      )
    );
    setEdit(!edit);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => {
        handleEditing(e, todo.id);
      }}
    >
      {todo.isDone ? (
        <s>{todo.todo}</s>
      ) : edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodot}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        />
      ) : (
        <span>{todo.todo}</span>
      )}

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span
          className="icon"
          onClick={() => {
            handleEdit();
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
