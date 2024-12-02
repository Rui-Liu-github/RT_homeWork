import {
  findAvgOfNums,
  findAverageAge,
  findAvgAgeByJob,
  findMaxNum,
  findLongestWord,
  findSumOfEvenNums,
  bubbleSortArr1,
  bubbleSortArr2,
  removeTypes,
  changeNumsByAmount,
  removeNumFromArr,
  checkIfStringIsNumber,
} from "./arrays";

describe("Arrays", () => {
  describe("checkIfStringIsNumber", () => {
    it("should return a boolean indicating if the str is a number", () => {
      expect(checkIfStringIsNumber("1")).toEqual(true);
      expect(checkIfStringIsNumber("12")).toEqual(true);
      expect(checkIfStringIsNumber("a")).toEqual(false);
      expect(checkIfStringIsNumber("a1")).toEqual(false);
      expect(checkIfStringIsNumber("1a")).toEqual(false);
    });
  });

  describe("findAvgOfNums", () => {
    it("should return the average of all the numbers in the array", () => {
      const arr = [1, "2", 3, "4", 5];
      expect(findAvgOfNums(arr)).toBe(3);
    });

    it("should return 0 if no numbers are in the array", () => {
      const arr = ["one", "two", "three"];
      expect(findAvgOfNums(arr)).toBe(0);
    });
  });

  describe("findAverageAge", () => {
    it("should return the average age of all the people", () => {
      const people = [
        { name: "John", age: 21 },
        { name: "Alice", age: 25 },
      ];
      expect(findAverageAge(people)).toBe(23);
    });

    it("should return 0 if no people are in the array", () => {
      const people = [];
      expect(findAverageAge(people)).toBe(0);
    });
  });

  describe("findAvgAgeByJob", () => {
    const people = [
      { name: "John", age: 21, job: "teacher" },
      { name: "Alice", age: 25, job: "teacher" },
      { name: "Bob", age: 30, job: "developer" },
      { name: "Eve", age: 20, job: "developer" },
    ];
    it("should return the average age of people with the same job", () => {
      expect(findAvgAgeByJob(people, "teacher")).toBe(23);
      expect(findAvgAgeByJob(people, "developer")).toBe(25);
    });

    it("should return 0 if no person with the job was found", () => {
      expect(findAvgAgeByJob(people, "student")).toBe(0);
    });
  });

  describe("findMaxNum", () => {
    it("should return the maximum number in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(findMaxNum(arr)).toBe(5);
    });

    it("should return 0 if the array is empty", () => {
      const arr = [];
      expect(findMaxNum(arr)).toBe(0);
    });
  });

  describe("findLongestWord", () => {
    it("should return the longest word in the string", () => {
      const str = "I love JavaScript";
      expect(findLongestWord(str)).toBe("JavaScript");
    });

    it("should return an empty string if the string is empty", () => {
      const str = "";
      expect(findLongestWord(str)).toBe("");
    });
  });

  describe("findSumOfEvenNums", () => {
    it("should return an array of only the even numbers", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(findSumOfEvenNums(arr)).toEqual([2, 4]);
    });

    it("should return an empty array if no even numbers are in the array", () => {
      const arr = [1, 3, 5];
      expect(findSumOfEvenNums(arr)).toEqual([]);
    });
  });

  describe("bubbleSortArr1", () => {
    it("should return a new sorted array using the bubble sort algorithm", () => {
      const num = [5, 3, 8, 2, 1];
      expect(bubbleSortArr1(num)).toEqual([1, 2, 3, 5, 8]);
    });

    it("the returned array should not be the same as the original array", () => {
      const num = [5, 3, 8, 2, 1];
      expect(bubbleSortArr1(num)).not.toBe(num);
    });

    it("should return an empty array if the array is empty", () => {
      const num = [];
      expect(bubbleSortArr1(num)).toEqual([]);
    });
  });

  describe("bubbleSortArr2", () => {
    it("should return the original array reference sorted", () => {
      const num = [5, 3, 8, 2, 1];
      expect(bubbleSortArr2(num)).toEqual([1, 2, 3, 5, 8]);
    });

    it("the returned array should be the same as the original array", () => {
      const num = [5, 3, 8, 2, 1];
      expect(bubbleSortArr2(num)).toBe(num);
    });

    it("should return an empty array if the array is empty", () => {
      const num = [];
      expect(bubbleSortArr2(num)).toEqual([]);
    });
  });

  describe("removeTypes", () => {
    it("should remove all instances of the type string from the array", () => {
      const arr = [1, "2", 3, "4", 5];
      const typeToRemove = "string";
      expect(removeTypes(arr, typeToRemove)).toEqual([1, 3, 5]);
    });

    it("should remove all instances of the type number from the array", () => {
      const arr = [1, "2", 3, "4", 5];
      const typeToRemove = "number";
      expect(removeTypes(arr, typeToRemove)).toEqual(["2", "4"]);
    });

    it("should remove all instances of the type boolean from the array", () => {
      const arr = [1, "2", true, "4", false];
      const typeToRemove = "boolean";
      expect(removeTypes(arr, typeToRemove)).toEqual([1, "2", "4"]);
    });

    it("should remove all instances of the type object from the array", () => {
      const arr = [1, 2, 3, { name: "John" }];
      const typeToRemove = "object";
      expect(removeTypes(arr, typeToRemove)).toEqual([1, 2, 3]);
    });

    it("should return the original array if the type is not found", () => {
      const arr = [1, 2, 3, 4, 5];
      const typeToRemove = "boolean";
      expect(removeTypes(arr, typeToRemove)).toEqual([1, 2, 3, 4, 5]);
    });

    it("should return an empty array if the original array is empty", () => {
      const arr = [];
      const typeToRemove = "string";
      expect(removeTypes(arr, typeToRemove)).toEqual([]);
    });
  });

  describe("changeNumsByAmount", () => {
    it("should return an array of numbers with the amount added  to each number", () => {
      const arr = [1, 2, 3, 4, 5];
      const amount = 2;
      expect(changeNumsByAmount(arr, amount, "+")).toEqual([3, 4, 5, 6, 7]);
    });

    it("should return an array of numbers with the amount subtracted from each number", () => {
      const arr = [1, 2, 3, 4, 5];
      const amount = 2;
      expect(changeNumsByAmount(arr, amount, "-")).toEqual([-1, 0, 1, 2, 3]);
    });

    it("should return an array of numbers with the amount multiplied by each number", () => {
      const arr = [1, 2, 3, 4, 5];
      const amount = 2;
      expect(changeNumsByAmount(arr, amount, "*")).toEqual([2, 4, 6, 8, 10]);
    });

    it("should return an array of numbers with the amount divided by each number", () => {
      const arr = [2, 4, 6, 8, 10];
      const amount = 2;
      expect(changeNumsByAmount(arr, amount, "/")).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("removeNumFromArr", () => {
    it("should return an array without the specified number", () => {
      const nums = [1, 2, 3, 3, 3, 4, 5];
      const num = 3;
      expect(removeNumFromArr(nums, num)).toEqual([1, 2, 4, 5]);
    });

    it("should return the original array if the number is not found", () => {
      const nums = [1, 2, 3, 4, 5];
      const num = 6;
      expect(removeNumFromArr(nums, num)).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
