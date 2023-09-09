import "./App.scss";
// Importing libraries
import { useState } from "react";
// Importing Components
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
// Importing Types
import { Todo } from "./models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <>
      <h1>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
