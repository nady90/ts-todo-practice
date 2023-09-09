import "./TodoList.scss";
// Importing libraries
import React from "react";
// Importing Components
import SingleTodo from "../SingleTodo/SingleTodo";
// Importing Types
import { Todo } from "../../models";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
