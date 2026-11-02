import FavouriteCardCSS from './BodyComponent.module.css';


export const FavouritesCards = ({ text, count }) => {
  return (
    <div className={FavouriteCardCSS.favourite_card}>
      <p className={FavouriteCardCSS.favourite_card_count}>{count} items</p>
      <h2 className={FavouriteCardCSS.favourite_card_title}>{text}</h2>
    </div>
  );
};


// This component is meant to be a reusable card that can be used in the FavoritesPage to display the number of favorite items. It takes in two props: 'text' which is the title of the card, and 'count' which is the number of items in the favorites list.