import { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault(); // so the page doesn't reload
    editTodo(value, task.id);
    setValue(""); // Clearing the form
  };

  return (
    <div className=" flex flex-col justify-center ">
      <form
        className=" font-primary w-full px-5 flex items-center mt-5 "
        onSubmit={handleSumbit}
      >
        <input
          type=" "
          className="outline-none bg-transparent border-2 border-gray-500 p-2  w-full max-w-[70%] rounded placeholder:text-gray-300"
          placeholder="Update Task"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button className="border-none text-sm md:text-lg  p-1 text-white font-semibold rounded ml-2 cursor-pointer bg-slate-600  w-full max-w-[25%] ">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;
