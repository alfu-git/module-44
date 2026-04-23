import NewTasksPageForm from "@/components/newTasksPage/NewTasksPageForm";
import React from "react";

export const metadata = {
  title: "New Tasks Page",
};

const AddNewTaskPage = () => {
  return (
    <section className="my-15">
      <div className="max-w-4xl mx-auto">
        <NewTasksPageForm />
      </div>
    </section>
  );
};

export default AddNewTaskPage;
