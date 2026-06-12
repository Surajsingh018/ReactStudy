import React from "react";
import { useApi } from "./CustomHook";

const Products = () => {
  let { data, loading, error } = useApi("https://dummyjson.com/products");
  console.log(data, loading, error);

  if (loading) {
    return <h4>Loading.....</h4>;
  }
  return (
    <div>
      <h1>Products Page</h1>
      {data?.product.map((ele) => {
        return (
          <div key={Element.id}>
            <img src={ele.thumbnail} alt={ele.title} />
            <h5>{ele.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
