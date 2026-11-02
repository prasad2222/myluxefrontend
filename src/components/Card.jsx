import { useState } from "react";
import CardCSS from "./Card.module.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ProductFavourite } from "./ProductFavourite";
import { useCart } from "../context/FavoritesContext";

export const Card = ({ pageKey, ...product }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className={CardCSS.card}>
      <div className={CardCSS.image_box}>
        <div className={CardCSS.favourite_icon}>
          <ProductFavourite product={product} />
        </div>
        <img src={product.images?.[0]} alt="Product" />
      </div>

      <div className={CardCSS.content}>
        <h3>{product.title}</h3>

        <div className={CardCSS.rating}>
          {[...Array(Math.floor(product.rating))].map((_, index) => (
            <FaStar key={index} />
          ))}
          {product.rating - Math.floor(product.rating) >= 0.01 && (
            <FaStarHalfAlt />
          )}
          {[...Array(5 - Math.ceil(product.rating))].map((_, index) => (
            <FaRegStar key={index} />
          ))}
          <span>{product.rating}</span>
        </div>

        <div className={CardCSS.prices_container}>
          <p className={CardCSS.price}>₹{product.price}</p>

          {/* ADD TO CART / COUNTER */}
          {count === 0 ? (
            <div
              className={CardCSS.add_to_cart}
              onClick={() => setCount(1)}
            >
              +
            </div>
          ) : (
            <div className={CardCSS.counter}>
              <button onClick={() => setCount(count - 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </div>

        <div className={CardCSS.button_container}>

            {pageKey === "cart" ? (
              <button onClick={() => removeFromCart(product.id)}> Remove </button>
            ) : (
                <button onClick={() => addToCart({...product, quantity: count > 0 ? count : 1})}> Add to Cart </button>
            )}
            <button> Buy Now </button>
        </div>
      </div>
    </div>
  );
};