import { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    async function getproducts() {
      try {
        let resp = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        let data = await resp.json();
        console.log(data);
        setItems(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getproducts();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <h1>All Products</h1>
      {items.length === 0 ? (
        <p>No products available</p>
      ) : (
        <section>
          {items.map((ele) => (
            <article key={ele.id} style={{ marginBottom: 24 }}>
              <img
                src={ele.thumbnail}
                alt={ele.title}
                height={200}
                width={200}
              />
              <h2>{ele.title}</h2>
              <p>{ele.description}</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
};
export default Products;
