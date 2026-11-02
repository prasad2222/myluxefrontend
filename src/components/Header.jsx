import HeaderCSS from "./Header.module.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/FavoritesContext";

export const Header = () => {

  const { favorites } = useFavorites();
  const { cart } = useCart();

  return (
    <header className={HeaderCSS.header}>
      
      {/* Left */}
      <div className={HeaderCSS.logo}>
        <h1>
          LU<span>X</span>E
        </h1>
      </div>

      {/* Center */}
      <div className={HeaderCSS.centerSection}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Products/women">Women</Link>
          {/* <Link to="/Products/women">Women</Link> */}
          <Link to="/Products/men">Men</Link>
          <Link to="/Products/accessories">Accessories</Link>
          <Link to="/Products/sale">Sale</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
        </nav>

        <div className={HeaderCSS.searchBar}>
          <input type="text" placeholder="Search for products" />
          <FaSearch />
        </div>
      </div>

      {/* Right */}
      <div className={HeaderCSS.icons}>
        <Link to="/favorites" className={`${HeaderCSS.iconWrapper} ${
    favorites.length === 0 ? HeaderCSS.empty : ""
  }`}>
          <FaHeart className={HeaderCSS.icon} />
          {favorites.length > 0 && (
            <span className={HeaderCSS.badge}>
              {favorites.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className={`${HeaderCSS.iconWrapper} ${
    cart.length === 0 ? HeaderCSS.empty : ""
  }`}>
          <FaShoppingCart className={HeaderCSS.icon} />
          {cart.length > 0 && (
            <span className={HeaderCSS.badge}>
              {cart.length}
            </span>
          )}
        </Link>

        <Link to="/profile">
          <FaUser className={HeaderCSS.icon} />
        </Link>
      </div>

    </header>
  );
};




