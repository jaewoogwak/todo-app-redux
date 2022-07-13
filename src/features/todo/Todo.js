import { useDispatch } from "react-redux";
import { DeleteTodo } from "./todoSlice";

export default function Todo({ text, id }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(DeleteTodo({ id: id }));
  };
  return (
    <div>
      <span>{text} </span>
      <button onClick={() => handleDeleteTodo(id)}>❎</button>
    </div>
  );
}
