import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./features/todo/List";
import { AddTodo } from "./features/todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    dispatch(AddTodo({ text: text }));
    setText("");
  };

  return (
    <div>
      <h1>Todo-app redux</h1>
      <label>
        <article>To Do</article>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="How's going on?"
        ></input>
      </label>
      <button onClick={handleAddTodo}>Add</button>
      <List todos={todos} />
    </div>
  );
}

export default App;
