import AddTaskModal from "@/components/tasksPage/AddTaskModal";
import TaskCard from "@/components/tasksPage/TaskCard";
import { createTask } from "@/lib/actions";
import getTasks from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Tasks Page",
};

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <section className="my-10">
      <div>
        <h2 className="text-5xl font-bold text-center">Tasks Page</h2>

        <div className="my-5 flex justify-between">
          <AddTaskModal createTask={createTask} />

          <div className="flex flex-col gap-2 items-center">
            <Link href="/tasks/add-new-task">
              <Button>Add New Task</Button>
            </Link>

            <p className="text-zinc-400">With New Page</p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
