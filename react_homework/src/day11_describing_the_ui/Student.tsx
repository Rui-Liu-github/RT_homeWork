/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component, FC } from "react";

// implement a Student component here
export enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: Grade;
}

export interface StudentProps {
  student: StudentType;
}

export function StudentFn({ student }: StudentProps) {
  const { id, name, age, grade } = student;
  return (
    <div data-testid="student">
      <h2>student information</h2>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Grade:</strong> {grade}
      </p>
    </div>
  );
}

export class StudentClass extends Component<StudentProps> {
  render() {
    const { id, name, age, grade } = this.props.student;
    return (
      <div data-testid="student">
        <h2>student information</h2>
        <p>
          <span>ID:</span>
          {id}
        </p>
        <p>
          <span>Name:</span>
          {name}
        </p>
        <p>
          <span>student age:</span> {age}
        </p>
        <p>
          <span>student grade:</span> {grade}
        </p>
      </div>
    );
  }
}
