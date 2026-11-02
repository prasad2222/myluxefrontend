import { useFavorites } from "../context/FavoritesContext";
import { CommonHeroSection } from "./CommonHeroSection";


export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div style={{ paddingTop: '70px' }}>
      <CommonHeroSection 
        pagePath="Home / My Account / Favourites" 
        headerOne="Favourites" 
        Headertwo="Pieces you love, saved for later" 
        products={favorites}
        pageKey="favorites" />
    </div>
  );
};