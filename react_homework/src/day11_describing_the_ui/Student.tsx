/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react";

// implement a Student component here

export interface StudentType {}

export function StudentFn() {
  return <div data-testid="student"></div>;
}

export class StudentClass extends Component {
  render() {
    return <div data-testid="student">Student</div>;
  }
}
