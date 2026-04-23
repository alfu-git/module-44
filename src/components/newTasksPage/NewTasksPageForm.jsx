"use client";
import { createTask2 } from "@/lib/actions";
import {
  Button,
  Input,
  Label,
  Select,
  ListBox,
  Modal,
  TextField,
  Form,
  FieldError,
} from "@heroui/react";
import React from "react";

const NewTasksPageForm = () => {
  return (
    <div>
      <Form action={createTask2} className="flex flex-col gap-4">
        <TextField isRequired className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
        </TextField>

        <TextField
          className="w-full"
          name="description"
          validate={(Value) => {
            if (Value.length < 30) {
              return "description must be at least 30 characters !";
            }
          }}
        >
          <Label>Description</Label>
          <Input placeholder="Enter your task details" />
          <FieldError />
        </TextField>

        <Select
          isRequired
          name="status"
          className="w-[256px]"
          placeholder="Select one"
        >
          <Label>Status</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="in-progress" textValue="In-Progress">
                In-Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select
          isRequired
          name="priority"
          className="w-[256px]"
          placeholder="Select one"
        >
          <Label>Priority</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="dueDate" type="date">
          <Label>Due Date</Label>
          <Input placeholder="Enter your due date" />
        </TextField>

        <Modal.Footer>
          <div className="flex gap-3 items-center">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>

            <Button type="submit" slot="close">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default NewTasksPageForm;
