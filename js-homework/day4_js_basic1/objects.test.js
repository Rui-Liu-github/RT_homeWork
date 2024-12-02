import {
  combineObjects,
  changeValueOf,
  cancelExpiredEvents,
  findEventByType,
} from "./objects";

describe("Objects", () => {
  describe("combineObjects", () => {
    it("should combine the objects", () => {
      const obj1 = { name: "Alice", age: 25 };
      const obj2 = { job: "teacher" };
      expect(combineObjects(obj1, obj2)).toEqual({
        name: "Alice",
        age: 25,
        job: "teacher",
      });
    });

    it("should use the value from obj2 if the objects have the same key", () => {
      const obj1 = { name: "Alice", age: 25 };
      const obj2 = { name: "John", age: 21 };
      expect(combineObjects(obj1, obj2)).toEqual({ name: "John", age: 21 });
    });
  });

  describe("changeValueOf", () => {
    it("should change the value of the key in the object", () => {
      const obj = { name: "Alice", age: 25 };
      changeValueOf(obj, "age", 21);
      expect(obj).toEqual({ name: "Alice", age: 21 });
    });

    it("should add the key-value pair if the key does not exist", () => {
      const obj = { name: "Alice", age: 25 };
      changeValueOf(obj, "job", "teacher");
      expect(obj).toEqual({ name: "Alice", age: 25, job: "teacher" });
    });
  });

  describe("cancelExpiredEvents", () => {
    it("should cancel the expired events", () => {
      const events = [
        { name: "Birthday Party", date: "2020-01-01", isCanceled: false },
        { name: "New Year Party", date: "2021-01-01", isCanceled: false },
        { name: "Christmas Party", date: "2024-12-25", isCanceled: false },
      ];
      cancelExpiredEvents(events);
      expect(events).toEqual([
        { name: "Birthday Party", date: "2020-01-01", isCanceled: true },
        { name: "New Year Party", date: "2021-01-01", isCanceled: true },
        { name: "Christmas Party", date: "2024-12-25", isCanceled: false },
      ]);
    });
  });

  describe("findEventByType", () => {
    it("should find the event by type", () => {
      const events = [
        { name: "Birthday Party", type: "private" },
        { name: "New Year Party", type: "public" },
        { name: "Christmas Party", type: "private" },
      ];
      expect(findEventByType(events, "private")).toEqual([
        { name: "Birthday Party", type: "private" },
        { name: "Christmas Party", type: "private" },
      ]);
    });

    it("should return an empty array if the type does not exist", () => {
      const events = [
        { name: "Birthday Party", type: "private" },
        { name: "New Year Party", type: "public" },
        { name: "Christmas Party", type: "private" },
      ];
      expect(findEventByType(events, "work")).toEqual([]);
    });
  });
});
