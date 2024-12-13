import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StudentsListClass, StudentsListFn } from "./StudentsList";
import { StudentType } from "./Student";

describe("StudentsList", () => {
  const students: StudentType[] = [
    {
      id: 1,
      name: "John",
      age: 20,
      grade: "A",
    },
    {
      id: 2,
      name: "Jane",
      age: 21,
      grade: "B",
    },
    {
      id: 3,
      name: "Jack",
      age: 22,
      grade: "C",
    },
  ];

  const components = [
    { name: "Function Component", Component: StudentsListFn },
    { name: "Class Component", Component: StudentsListClass },
  ];

  components.forEach(({ name, Component }) => {
    test(`${name} should render a list of students`, () => {
      const { getByText, getAllByTestId } = render(
        <Component students={students} />
      );

      students.forEach((student) => {
        expect(getByText(student.id)).toBeInTheDocument();
        expect(getByText(student.name)).toBeInTheDocument();
        expect(getByText(student.age)).toBeInTheDocument();
        expect(getByText(student.grade)).toBeInTheDocument();
      });

      expect(getAllByTestId("student").length).toBe(students.length);
    });
  });
});
