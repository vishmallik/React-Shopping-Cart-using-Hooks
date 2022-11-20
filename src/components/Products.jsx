import React, { useState } from "react";
import Product from "./Product";

export default function Products({ addToCart, products, size }) {
  let [sortBy, setSortBy] = useState("");

  function filterProduct(sizes) {
    let sortedProducts = products;
    if (sizes.length !== 0) {
      // eslint-disable-next-line array-callback-return
      sortedProducts = products.filter((product) => {
        for (const size of sizes) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }
    if (sortBy === "lowest") {
      return [...sortedProducts].sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortBy === "highest") {
      return [...sortedProducts].sort((a, b) => {
        return b.price - a.price;
      });
    }
    return sortedProducts;
  }

  return (
    <div className=" flex">
      <div className="products">
        <div className="header flex">
          <p>{filterProduct(size).length} Products Found</p>
          <div>
            <p>Order By</p>
            <select
              name=""
              id=""
              value={sortBy}
              onChange={({ target }) => setSortBy(target.value)}
            >
              <option value="">Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </div>
        </div>
        <ul className=" ">
          {filterProduct(size).map((product) => {
            return (
              <Product
                key={product.sku}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
