import Todo from "./Todo";
// text
export default function List({ todos, deleteTodo }) {
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
