import React, { useState } from "react";
import "../../styles/hw.css";

interface shoppingTypes {
  appleCount: number;
  bananaCount: number;
  mangoCount: number;
  strawCount: number;
}
function ShopingCart() {
  const [count, setCount] = useState<shoppingTypes>({
    appleCount: 0,
    bananaCount: 0,
    mangoCount: 0,
    strawCount: 0,
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  function increment(name: keyof shoppingTypes, price: number) {
    setCount((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));

    // const newPrice = Number(price.toFixed(2));
    setTotalPrice((prev) => {
      const newTotal = prev + price;
      return Number(newTotal.toFixed(2));
    });
  }

  function decrement(name: keyof shoppingTypes, price: number) {
    if (count[name] > 0) {
      setCount((prev) => ({
        ...prev,
        [name]: prev[name] - 1,
      }));

      //   const newPrice = Math.round(price * 100) / 100;
      // const newPrice = Number(price.toFixed(2));
      setTotalPrice((prev) => {
        const newTotal = prev - price;
        return Number(newTotal.toFixed(2));
      });
    }
  }

  //mock api call using setTimeout or promise
  const handleCheckOut = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (totalPrice > 0) {
          resolve(
            `the order has been checkout now, total price ${totalPrice} $`
          );
          setCount({
            appleCount: 0,
            bananaCount: 0,
            mangoCount: 0,
            strawCount: 0,
          });
          setTotalPrice(0);

          window.alert(
            `the order has been checkout now, total price $ ${totalPrice}`
          );
        } else {
          window.alert("cart is empty now. so checkout failed");
        }
      }, 2000);
    });
  };

  return (
    <div className="contentBox">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Apple</th>
            <th>$0.99</th>
            <th>
              <span onClick={() => decrement("appleCount", 0.99)}>-</span>
              <span>{count.appleCount}</span>
              <span onClick={() => increment("appleCount", 0.99)}>+</span>
            </th>
          </tr>
          <tr>
            <th>Banana</th>
            <th>$0.49</th>
            <th>
              <span onClick={() => decrement("bananaCount", 0.49)}>-</span>
              <span>{count.bananaCount}</span>
              <span onClick={() => increment("bananaCount", 0.49)}>+</span>
            </th>
          </tr>
          <tr>
            <th>Mango</th>
            <th>$1.99</th>
            <th>
              <span onClick={() => decrement("mangoCount", 1.99)}>-</span>
              <span>{count.mangoCount}</span>
              <span onClick={() => increment("mangoCount", 1.99)}>+</span>
            </th>
          </tr>
          <tr>
            <th>Strawberry</th>
            <th>$2.49</th>
            <th>
              <span onClick={() => decrement("strawCount", 2.49)}>-</span>
              <span>{count.strawCount}</span>
              <span onClick={() => increment("strawCount", 2.49)}>+</span>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="calculate">
        <h2>Total Price: $ {totalPrice}</h2>
        <button onClick={handleCheckOut}>Check Out</button>
        <button
          onClick={() => {
            setCount({
              appleCount: 0,
              bananaCount: 0,
              mangoCount: 0,
              strawCount: 0,
            });
            setTotalPrice(0);
          }}
        >
          Empty cart
        </button>
      </div>
    </div>
  );
}

export default ShopingCart;
