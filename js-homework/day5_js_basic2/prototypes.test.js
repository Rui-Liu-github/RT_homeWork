import {
  myMap,
  myFilter,
  myConcat,
  myFind,
  myEvery,
  mySome,
  myIncludes,
  myJoin,
  myPush,
  myReverse1,
  myReverse2,
  myReduce,
  mySort,
  mySlice,
} from "./prototypes";

describe("prototypes", () => {
  describe("myMap", () => {
    it("should apply the callback to each element in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myMap(arr, (num) => num * 2)).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe("myFilter", () => {
    it("should return a new array with the truthy values", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myFilter(arr, (num) => num % 2 === 0)).toEqual([2, 4]);
    });
  });

  describe("myConcat", () => {
    it("should return a new array with the elements of both arrays", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      expect(myConcat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("myFind", () => {
    it("should return the first truthy value", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myFind(arr, (num) => num % 2 === 0)).toEqual(2);
    });
  });

  describe("myEvery", () => {
    it("should return true if all elements are truthy", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myEvery(arr, (num) => num > 0)).toEqual(true);
    });
  });

  describe("mySome", () => {
    it("should return true if at least one element is truthy", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(mySome(arr, (num) => num % 2 === 0)).toEqual(true);
    });
  });

  describe("myIncludes", () => {
    it("should return true if the value is in the array", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myIncludes(arr, 3)).toEqual(true);
    });
  });

  describe("myJoin", () => {
    it("should join the elements with the separator", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myJoin(arr, "-")).toEqual("1-2-3-4-5");
    });
  });

  describe("myPush", () => {
    it("should add the value to the end of the array", () => {
      const arr = [1, 2, 3, 4, 5];
      myPush(arr, 6);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("myReverse1", () => {
    it("should return the reversed array", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myReverse1(arr)).toEqual([5, 4, 3, 2, 1]);
    });

    it("should return a new array", () => {
      const arr = [1, 2, 3, 4, 5];
      const reversed = myReverse1(arr);
      expect(reversed).toEqual([5, 4, 3, 2, 1]);
      expect(reversed).not.toBe(arr);
    });

    it("should not mutate the original array", () => {
      const arr = [1, 2, 3, 4, 5];
      myReverse1(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("myReverse2", () => {
    it("should return the original array reversed", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myReverse2(arr)).toEqual([5, 4, 3, 2, 1]);
    });

    it("should return the same array reference", () => {
      const arr = [1, 2, 3, 4, 5];
      const reversed = myReverse2(arr);
      expect(reversed).toEqual([5, 4, 3, 2, 1]);
      expect(reversed).toBe(arr);
    });

    it("should mutate the original array", () => {
      const arr = [1, 2, 3, 4, 5];
      myReverse2(arr);
      expect(arr).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe("myReduce", () => {
    it("should return the accumulated value", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(myReduce(arr, (acc, num) => acc + num, 0)).toEqual(15);
    });
  });

  describe("mySort", () => {
    it("should sort the array in ascending order", () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      expect(mySort(arr, (a, b) => a - b)).toEqual([
        1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
      ]);
    });

    it("should sort the array in descending order", () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      expect(mySort(arr, (a, b) => b - a)).toEqual([
        9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1,
      ]);
    });
  });

  describe("mySlice", () => {
    it("should return a new array with the elements sliced", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(mySlice(arr, 1, 3)).toEqual([2, 3]);
    });

    it("should return a new array with the elements sliced from the start", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(mySlice(arr, 2)).toEqual([3, 4, 5]);
    });

    it("should return a new array with the elements sliced from the end", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(mySlice(arr, -2)).toEqual([4, 5]);
    });
  });
});
