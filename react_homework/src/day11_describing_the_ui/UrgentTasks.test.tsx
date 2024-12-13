import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import UrgentTasks, { TaskType } from "./UrgentTasks";

describe("UrgentTasks", () => {
  test("should display only the urgent tasks", () => {
    const tasks: TaskType[] = [
      { id: 1, name: "Take out the trash", priority: "normal" },
      { id: 2, name: "Prepare project presentation", priority: "urgent" },
      { id: 3, name: "Book flight tickets", priority: "urgent" },
      { id: 4, name: "Water the plants", priority: "normal" },
      { id: 5, name: "Complete React tutorial", priority: "urgent" },
    ];

    const { getByText, queryByText } = render(<UrgentTasks tasks={tasks} />);

    expect(getByText("Urgent Tasks")).toBeInTheDocument();
    expect(getByText("Prepare project presentation")).toBeInTheDocument();
    expect(getByText("Book flight tickets")).toBeInTheDocument();
    expect(getByText("Complete React tutorial")).toBeInTheDocument();
    expect(queryByText("Take out the trash")).toBeNull();
    expect(queryByText("Water the plants")).toBeNull();
  });
});
