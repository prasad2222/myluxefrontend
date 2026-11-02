import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

export const ProductFavourite = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const fav = isFavorite(product.id);

  return (
    <div onClick={() => toggleFavorite(product)}>
      {fav ? <FaHeart color="red" /> : <FaRegHeart />}
    </div>
  );
};