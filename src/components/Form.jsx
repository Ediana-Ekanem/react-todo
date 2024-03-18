import { useState } from "react";
import Todo from "./Todo";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault(); // so the page doesn't reload
    createTodo(value);
    setValue(""); // Clearing the form
  };

  return (
    <div className=" flex flex-col justify-center ">
      <form
        className=" font-primary w-full px-5 flex items-center "
        onSubmit={handleSumbit}
      >
        <input
          type=" "
          className="outline-none bg-transparent border-2 border-gray-500 p-2  w-full max-w-[70%] rounded placeholder:text-gray-300"
          placeholder="Enter your Task"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button className="border-none text-sm md:text-lg  p-1 text-white font-semibold rounded ml-2 cursor-pointer bg-slate-600  w-full max-w-[25%] ">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
