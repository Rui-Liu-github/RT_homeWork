import { sum, sumOfAll } from "./functions";

describe("Functions", () => {
  describe("sum", () => {
    it("should return the sum of two numbers", () => {
      expect(sum(1, 2)).toEqual(3);
    });

    it("should return the sum of two numbers with default values", () => {
      expect(sum()).toEqual(0);
    });

    it("should return the sum if only one number is passed", () => {
      expect(sum(1)).toEqual(1);
    });

    it("should throw an error if wrong data type is passed", () => {
      expect(() => sum("1", 2)).toThrow();
    });
  });

  describe("sumOfAll", () => {
    it("should return the sum of all numbers", () => {
      expect(sumOfAll(1)).toEqual(1);
      expect(sumOfAll(1, 2, 3, 4, 5)).toEqual(15);
      expect(sumOfAll(1, 2, 3, 4, 5, 6)).toEqual(21);
    });

    it("should return the sum of all numbers with default values", () => {
      expect(sumOfAll()).toEqual(0);
    });

    it("should throw an error if wrong data type is passed", () => {
      expect(() => sumOfAll("1", 2)).toThrow();
    });
  });
});
