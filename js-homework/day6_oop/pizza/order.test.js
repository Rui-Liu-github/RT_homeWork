import Order from "./Order";
import Pizza from "./Pizza";

describe("Order", () => {
  let order;
  let pizza1, pizza2;

  beforeEach(() => {
    order = new Order();
    pizza1 = new Pizza("medium", ["cheese", "tomato"]);
    pizza2 = new Pizza("large", ["cheese", "tomato", "pepperoni"]);

    // Mocking the getTotalCost method to return a fixed value for testing
    pizza1.getTotalCost = jest.fn().mockReturnValue(10);
    pizza2.getTotalCost = jest.fn().mockReturnValue(15);
  });

  test("should add pizzas to the order", () => {
    order.addPizza(pizza1);
    order.addPizza(pizza2);
    expect(order.pizzas).toEqual([pizza1, pizza2]);
  });

  test("should remove pizza from the order", () => {
    order.addPizza(pizza1);
    order.addPizza(pizza2);
    order.removePizza(0); // Remove the first pizza
    expect(order.pizzas).toEqual([pizza2]);
  });

  test("should calculate total cost of all pizzas in the order", () => {
    order.addPizza(pizza1);
    order.addPizza(pizza2);
    const totalCost = order.getTotalCost();
    expect(totalCost).toBe(25); // 10 + 15
  });

  test("should update order status", () => {
    order.updateStatus("completed");
    expect(order.status).toBe("completed");
  });
});
