import tasks from "../data/tasks.json";

const getTasks = async () => {
  return tasks;
};

export default getTasks;

export const postNewTask = async (newTask) => {
  newTask.id = tasks.length + 1;
  tasks.push(newTask);

  return { ok: true, message: "New Task Added Successfully" };
};
