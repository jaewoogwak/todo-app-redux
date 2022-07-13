import { useState } from "react";
import List from "./features/todo/List";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const AddTodo = () => {
    const newTodo = {
      text: text,
      id: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
    setText("");
  };
  const DeleteTodo = (id) => {
    console.log("deleteTodo", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  console.log(todos);

  return (
    <div>
      <h1>todo-app redux</h1>
      <label>
        <article>Input</article>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="How's going on?"
        ></input>
      </label>
      <button onClick={AddTodo}>Add</button>
      <List todos={todos} deleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
