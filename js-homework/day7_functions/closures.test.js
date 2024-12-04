import {
  createCounter,
  createGreeting,
  createLimitedCallFunction,
  createPerson,
  createRateLimiter,
  functionStore,
} from "./closures";

describe("closures", () => {
  describe("createGreeting", () => {
    it("should return a greeting message", () => {
      const sayHello = createGreeting("Hello");
      expect(sayHello("Alice")).toBe("Hello Alice");
      const sayHi = createGreeting("Hi");
      expect(sayHi("Bob")).toBe("Hi Bob");
    });
  });

  describe("createCounter", () => {
    it("should return an object with increment and getValue methods", () => {
      let counter = createCounter();
      expect(counter.getValue()).toBe(0);
      expect(counter.increment()).toBe(1);
      expect(counter.increment()).toBe(2);
      expect(counter.getValue()).toBe(2);
    });
  });

  describe("functionStore", () => {
    it("should store and run functions", () => {
      const mockAdd = jest.fn((a, b) => a + b);
      const mockSubtract = jest.fn((a, b) => a - b);

      const store = functionStore();
      store.store("add", mockAdd);
      store.store("subtract", mockSubtract);
      expect(store.run("add", 5, 7)).toBe(12);
      expect(mockAdd).toHaveBeenCalledTimes(1);
      expect(mockAdd).toHaveBeenCalledWith(5, 7);
      expect(mockSubtract).not.toHaveBeenCalled();

      expect(store.run("subtract", 10, 3)).toBe(7);
      expect(mockSubtract).toHaveBeenCalledTimes(1);
      expect(mockSubtract).toHaveBeenCalledWith(10, 3);
      expect(mockAdd).toHaveBeenCalledTimes(1);
    });
  });

  describe("createPerson", () => {
    it("should create a person object with private variables", () => {
      const person = createPerson("Alice");
      expect(person.getName()).toBe("Alice");
      expect(person.setName("Bob")).toBe("Bob");
      expect(person.getName()).toBe("Bob");
    });
  });

  describe("createLimitedCallFunction", () => {
    it("should return a function that can only be called a limited number of times", () => {
      const mockFn = jest.fn();
      const limitedCallFn = createLimitedCallFunction(mockFn, 2);
      limitedCallFn();
      limitedCallFn();
      limitedCallFn();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  describe("createRateLimiter", () => {
    it("should return a function that can only be called once every 1000ms", () => {
      const mockFn = jest.fn();
      const rateLimiter = createRateLimiter(mockFn, 2, 1000);
      rateLimiter();
      rateLimiter();
      rateLimiter();
      rateLimiter();
      rateLimiter();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
});
