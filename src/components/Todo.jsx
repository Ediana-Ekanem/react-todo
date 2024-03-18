import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between px-5 mt-5">
      <p>{task.task}</p>
      <div className="flex  items-center gap-1 ">
        <FaEdit color="red" size={20} onClick={() => editTodo(task.id)} />
        <FaTrash color="green" size={18} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
