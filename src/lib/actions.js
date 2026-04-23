"use server";
import { revalidatePath } from "next/cache";
import { postNewTask } from "./tasks";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
  "use server";

  const newTask = Object.fromEntries(formData.entries());

  const res = await postNewTask(newTask);

  if (res.ok) {
    revalidatePath("/tasks");
  }

  return res;
};

export const createTask2 = async (formData) => {
  const newTask = Object.fromEntries(formData.entries());

  const res = await postNewTask(newTask);

  if (res.ok) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }

  return res;
};
