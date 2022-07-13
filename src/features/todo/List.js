import Todo from "./Todo";
// text
export default function List({ todos }) {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </div>
    </div>
  );
}
