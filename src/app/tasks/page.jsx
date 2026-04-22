import TaskCard from "@/components/tasksPage/TaskCard";
import getTasks from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <section className="mt-10">
      <div>
        <h2 className="text-5xl font-bold text-center">Tasks Page</h2>

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
