//card create ho with css with the help of grid and after click it will open a pop opp of particular card
// it use state and or ky hoga
// in mock conrolled form api calling or card create krna

import { useEffect, useState } from "react";
import style from "./ProductTask.module.css";
import { FcRating } from "react-icons/fc";

const ProductTask = () => {
  const [itemsTask, setItemsTask] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function getproducttask() {
      let res = await fetch("https://dummyjson.com/products", {
        signal: controller.signal,
      });

      let data = await res.json();
      setItemsTask(data.products);
    }

    getproducttask();

    return () => controller.abort();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Our Products</h1>

      <div className={style.productGrid}>
        {itemsTask.map((ele) => (
          <div
            className={style.card}
            key={ele.id}
            onClick={() => setSelectedProduct(ele)}
          >
            <div className={style.imageBox}>
              <img
                src={ele.thumbnail}
                alt={ele.title}
                className={style.image}
              />
            </div>

            <div className={style.cardBody}>
              <h2>{ele.title}</h2>
              <p>Brand: {ele.brand}</p>
              <p>Category: {ele.category}</p>
              <p>${ele.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}

      {selectedProduct && (
        <div className={style.overlay} onClick={() => setSelectedProduct(null)}>
          <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={style.closeBtn}
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className={style.modalImageBox}>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className={style.modalImage}
              />
            </div>

            <div className={style.modalContent}>
              <h2>{selectedProduct.title}</h2>
              <h3>
                Rating: {selectedProduct.rating} <FcRating />
              </h3>
              <p>{selectedProduct.description}</p>

              <h3>${selectedProduct.price}</h3>
              <h3>Discount {selectedProduct.discountPercentage}%</h3>

              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTask;
