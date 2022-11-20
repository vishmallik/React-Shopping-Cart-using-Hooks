import React from "react";

export default function Product({ addToCart, product }) {
  return (
    <li>
      <img src={`/static/products/${product.sku}_1.jpg`} alt="" />
      <h2>{product.title}</h2>
      <hr />
      <div>
        <small>{product.currencyFormat}</small>
        <h4>{product.price}</h4>
      </div>
      <div className="installment">
        or {product.installments === 0 ? 1 : product.installments} x{" "}
        <small>{product.currencyFormat}</small>
        <h4>{getInstallments(product)}</h4>
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </li>
  );
}
function getInstallments(product) {
  if (product.installments === 0) {
    return Number((product.price / 1).toFixed(2));
  } else {
    return Number((product.price / product.installments).toFixed(2));
  }
}
