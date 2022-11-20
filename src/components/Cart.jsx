import React from "react";
import { useState } from "react";

export default function Cart({ dec, del, inc, products }) {
  let [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <div className="cart">
        <div className="close" onClick={() => setIsOpen(false)}>
          <i className="fas fa-xmark"></i>
        </div>
        <div>
          <div className="cart-icon-wrapper">
            <div>
              <img
                src="./React-Shopping-Cart-using-Hooks/static/bag-icon.png"
                alt="cart"
              />
              <span>
                {products.reduce((acc, cv) => {
                  acc = acc + cv.quantity;
                  return acc;
                }, 0)}
              </span>
            </div>
            <h2>Cart</h2>
          </div>
          <hr />
          <ul>
            {products.map((product) => {
              return (
                <li className="flex item " key={product.sku}>
                  <i
                    className="fas fa-xmark delete-item"
                    onClick={() => del(product.id)}
                  ></i>
                  <img
                    src={`./React-Shopping-Cart-using-Hooks/static/products/${product.sku}_2.jpg`}
                    alt=""
                  />
                  <div className="product-details">
                    <p>{product.title}</p>
                    <span>
                      {product.availableSizes[0]} | {product.style}
                    </span>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div className="price">
                    <p>
                      {product.currencyFormat}
                      {product.price}
                    </p>
                    <span onClick={() => inc(product.id)}>+</span>
                    <span onClick={() => dec(product.id)}>-</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex container">
            <h5>SUBTOTAL</h5>
            <p>
              {" "}
              {products.length === 0 ? "$" : products[0].currencyFormat}
              {getSubtotal(products)}
            </p>
          </div>
          <button onClick={() => checkout(products)}>CHECKOUT</button>
        </div>
      </div>
    );
  } else {
    return (
      <label
        className="cart-button"
        htmlFor="cart"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="./React-Shopping-Cart-using-Hooks/static/bag-icon.png"
          alt="cart"
        />
        <span>
          {products.reduce((acc, cv) => {
            acc = acc + cv.quantity;
            return acc;
          }, 0)}
        </span>
      </label>
    );
  }
}
function getSubtotal(products) {
  let subtotal = products.reduce((acc, cv) => {
    acc += cv.quantity * cv.price;
    return acc;
  }, 0);
  return +subtotal.toFixed(2);
}

function checkout(products) {
  alert(
    `The total amount is ${
      products.length === 0 ? "$" : products[0].currencyFormat
    } ${getSubtotal(products)}`
  );
}
