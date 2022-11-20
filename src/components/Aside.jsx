import React from "react";
function unique(sizes) {
  let arr = [];
  sizes.forEach((size) => {
    if (!arr.includes(size)) {
      arr.push(size);
    }
  });

  return arr;
}

export default function Aside(props) {
  return (
    <ul className="aside">
      {unique(props.availableSizes).map((size) => {
        return (
          <li
            key={size}
            onClick={() => props.selectedSize(size)}
            className={props.size.includes(size) ? "active" : ""}
          >
            {size}
          </li>
        );
      })}
    </ul>
  );
}
