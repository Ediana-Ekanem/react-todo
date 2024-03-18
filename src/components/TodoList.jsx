// import { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoValue(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoValue));
  }, [todoValue]);

  const createTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, isEditing: false };
    setTodoValue([...todoValue, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="shadow-lg  rounded-md w-full  max-w-[30%] py-5 mx-auto mt-20">
      <h1 className="text-center text-lg font-semibold mb-3">My Todos</h1>
      <Form createTodo={createTodo} />
      {todoValue.map((todo, index) =>
        todo.isEditing ? (
          <Edit editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
