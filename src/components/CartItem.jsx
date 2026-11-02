import { useCart } from "../context/FavoritesContext";
import CartItemCSS from "./CartItem.module.css";

export const CartItem = ({ id, title, price, quantity, images }) => {
  const { removeFromCart } = useCart();
  const itemTotal = price * (quantity || 1);

  return (
    <div className={CartItemCSS.cart_item}>
      <div className={CartItemCSS.item_image}>
        <img src={images?.[1]} alt={title} />
      </div>

      <div className={CartItemCSS.item_details}>
        <h3>{title}</h3>
        <p className={CartItemCSS.price}>₹{price}</p>
      </div>

      <div className={CartItemCSS.item_quantity}>
        <p>Qty: <span>{quantity || 1}</span></p>
      </div>

      <div className={CartItemCSS.item_total}>
        <p>₹{itemTotal}</p>
      </div>

      <button
        className={CartItemCSS.remove_btn}
        onClick={() => removeFromCart(id)}
      >
        ✕
      </button>
    </div>
  );
};
