export default function Todo({ text, id, deleteTodo }) {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>❎</button>
    </div>
  );
}
