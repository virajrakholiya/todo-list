"use client";
import React, { useState } from "react";

function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTask([...task, { title, desc }]);
    console.log(task);

    setTitle("");
    setDesc("");
  };

  const deleteHandeler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  };

  const editHandler = (index) => {
    const taskToEdit = task[index];
    setTitle(taskToEdit.title);
    setDesc(taskToEdit.desc);
    setEditIndex(index);
  };

  return (
    <div className="p-10 flex flex-col justify-center">
      <h1 className="text-white text-center text-4xl">My Todo List</h1>

      <form
        onSubmit={submitHandler}
        className="flex justify-center items-center"
      >
        <input
          type="text"
          className="border-white bg-zinc-800 border-2 m-5 py-2 px-4 rounded-md outline-none"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-white bg-zinc-800 border-2 m-5 py-2 px-4 rounded-md outline-none"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-white rounded-md text-zinc-800 ">
          Add Task
        </button>
      </form>

      <div className="flex gap-5 justify-center flex-wrap">
        {task.map((item, index) => (
          <div
            key={index}
            className="w-[31%] min-h-[200px] max-h-[500px] bg-zinc-800 rounded-md p-1 border border-white overflow-hidden flex flex-col justify-between"
          >
            <div className="">
              {" "}
              <p className="text-white text-xl overflow-hidden overflow-ellipsis whitespace-pre-wrap break-words">
                Title: {item.title}
              </p>
              <p className="text-white text-xl overflow-hidden overflow-ellipsis whitespace-pre-wrap break-words">
                Description: {item.desc}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button
                className="p-2 w-[100px] text-black bg-red-400"
                onClick={() => {
                  deleteHandeler(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
