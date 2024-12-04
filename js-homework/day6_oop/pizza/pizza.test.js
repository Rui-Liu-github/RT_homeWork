import Pizza from "./Pizza";

describe("Pizza Class", () => {
  let toppingsData;
  let pizza1, pizza2, pizza3;

  beforeAll(() => {
    // Mock the toppings data
    global.TOPPINGS = {
      p: { cost: 1.5, name: "pepperoni" },
      g: { cost: 0.86, name: "green pepper" },
      o: { cost: 0.5, name: "onion" },
      bo: { cost: 0.2, name: "black olive" },
      m: { cost: 0.82, name: "mushroom" },
      c: { cost: 0.77, name: "cheese" },
    };
  });

  beforeEach(() => {
    // Create a new Pizza instance before each test
    pizza1 = new Pizza("small", ["p", "g"]);
    pizza2 = new Pizza("medium", ["m", "p", "bo"]);
    pizza3 = new Pizza("large", ["c", "o"]);
  });

  test("should correctly set instance properties", () => {
    expect(pizza1.size).toBe("small");
    expect(pizza1.toppingCodes).toEqual(["p", "g"]);

    expect(pizza2.size).toBe("medium");
    expect(pizza2.toppingCodes).toEqual(["m", "p", "bo"]);

    expect(pizza3.size).toBe("large");
    expect(pizza3.toppingCodes).toEqual(["c", "o"]);
  });

  test("getDescription returns correct format", () => {
    const description1 = pizza1.getDescription();
    expect(description1).toBe("A small pizza with pepperoni, green pepper.");

    const description2 = pizza2.getDescription();
    expect(description2).toBe(
      "A medium pizza with mushroom, pepperoni, black olive."
    );

    const description3 = pizza3.getDescription();
    expect(description3).toBe("A large pizza with cheese, onion.");
  });

  test("getBaseCost returns correct base cost for size", () => {
    expect(pizza1.getBaseCost()).toBe(6.5); // Assuming 6.5 is the cost for small size
    expect(pizza2.getBaseCost()).toBe(7.5); // Assuming 7.5 is the cost for medium size
    expect(pizza3.getBaseCost()).toBe(8.5); // Assuming 8.5 is the cost for large size
  });

  test("getTotalCost calculates correct total cost", () => {
    const totalCost1 = pizza1.getTotalCost();
    const expectedCost1 = 6.5 + 1.5 + 0.86; // base cost + pepperoni + green pepper
    expect(totalCost1).toBeCloseTo(expectedCost1);

    const totalCost = pizza2.getTotalCost();
    const expectedCost = 7.5 + 0.82 + 1.5 + 0.2; // base cost + mushroom + pepperoni + black olive
    expect(totalCost).toBeCloseTo(expectedCost);

    const totalCost3 = pizza3.getTotalCost();
    const expectedCost3 = 8.5 + 0.77 + 0.5; // base cost + cheese + onion
    expect(totalCost3).toBeCloseTo(expectedCost3);
  });

  test("getTotalCost calculates correctly with no toppings", () => {
    const plainPizza1 = new Pizza("small", []);
    expect(plainPizza1.getTotalCost()).toBe(6.5);

    const plainPizza2 = new Pizza("medium", []);
    expect(plainPizza2.getTotalCost()).toBe(7.5);

    const plainPizza3 = new Pizza("large", []);
    expect(plainPizza3.getTotalCost()).toBe(8.5);
  });
});
