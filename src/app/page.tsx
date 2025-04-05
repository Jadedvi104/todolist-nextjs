"use client"

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 text-center">
        <h1 className="text-3xl font-bold">To-Do List</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
          className="flex w-full gap-4"
        >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        <ul className="w-full">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-2 border-b border-gray-200"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">© 2025 To-Do App</p>
      </footer>
    </div>
  );
}
