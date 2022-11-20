import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Products from "./Products";
import Aside from "./Aside";
import data from "../data.json";

export default function App() {
  let [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.carts) || []
  );
  let [sizes, setSizes] = useState([]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUpdateLocalStorage);
  });

  function handleUpdateLocalStorage() {
    localStorage.setItem("carts", JSON.stringify(cartItems));
  }
  function addToCart(product) {
    let present = cartItems.find((p) => p.id === product.id);
    if (present) {
      incQuantity(product.id);
    } else {
      setCartItems((prevState) =>
        prevState.concat({ ...product, quantity: 1 })
      );
    }
  }
  function incQuantity(id) {
    let updatedCart = cartItems.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setCartItems(updatedCart);
  }
  function decQuantity(id) {
    let updatedCart = cartItems.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setCartItems(updatedCart);
  }

  function deleteItem(id) {
    let updatedCart = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCart);
  }

  function selectedSize(size) {
    if (sizes.includes(size)) {
      setSizes((prevState) => prevState.filter((s) => s !== size));
    } else {
      setSizes((prevState) => prevState.concat(size));
    }
  }

  return (
    <>
      <div className="flex container">
        <Aside
          size={sizes}
          selectedSize={selectedSize}
          availableSizes={data.products
            .map((product) => product.availableSizes)
            .flat(2)}
        />
        <Products products={data.products} size={sizes} addToCart={addToCart} />
      </div>
      <Cart
        products={cartItems}
        inc={incQuantity}
        dec={decQuantity}
        del={deleteItem}
      />
    </>
  );
}
