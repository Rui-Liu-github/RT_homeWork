import { getAverageAge } from "./objects_entries";

describe("Objects", () => {
  describe("getAverageAge", () => {
    test("should return the average age of the people", () => {
      const people = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Charlie", age: 35 },
      };
      expect(getAverageAge(people)).toBe(30);
    });
  });
});
