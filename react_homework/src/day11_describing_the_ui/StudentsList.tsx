import { Component, FC } from "react";
import { StudentType, StudentFn, StudentClass, Grade } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here
interface StudentsListProps {
  students: StudentType[];
}

export const StudentsListFn: FC<StudentsListProps> = ({
  students,
}: StudentsListProps) => {
  return (
    <div>
      <h1>Students List</h1>
      {students.map((student) => {
        return (
          <div key={student.id} data-testid="student">
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Age:</strong> {student.age}
            </p>
            <p>
              <strong>Grade:</strong> {student.grade}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export class StudentsListClass extends Component<StudentsListProps> {
  render() {
    const { students } = this.props;
    return (
      <div>
        <h1>Students List</h1>
        {students.map((student) => {
          return (
            <div key={student.id} data-testid="student">
              <p>
                <strong>ID:</strong> {student.id}
              </p>
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Age:</strong> {student.age}
              </p>
              <p>
                <strong>Grade:</strong> {student.grade}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
