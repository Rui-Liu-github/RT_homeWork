import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StudentClass, StudentFn, StudentType } from "./Student";

describe("Student", () => {
  const student = {
    id: 1,
    name: "John",
    age: 20,
    grade: "A",
  };

  const components = [
    { name: "Function Component", Component: StudentFn },
    { name: "Class Component", Component: StudentClass },
  ];

  components.forEach(({ name, Component }) => {
    test(`${name} should render the student's information`, () => {
      const { getByText } = render(<Component student={student} />);

      expect(getByText(student.id.toString())).toBeInTheDocument();
      expect(getByText(student.name)).toBeInTheDocument();
      expect(getByText(student.age.toString())).toBeInTheDocument();
      expect(getByText(student.grade)).toBeInTheDocument();
    });
  });
});
