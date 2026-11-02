import { Header } from "./Header";
import BodyCSS from "./BodyComponent.module.css";
import { Card } from "./Card";
import { FavouritesCards } from "./FavouritesCards";
import { CheckoutStepper } from "./CheckoutStepper";
import { React } from "react";
import { Fragment } from "react";
import { useCart } from "../context/FavoritesContext";

export const CommonHeroSection = ({ pagePath, headerOne, Headertwo, products, pageKey }) => {

    const { cart } = useCart();

      return (
        <div>
          <Header />
          <div className={BodyCSS.favorites_hero_section}>
            <p style={{ marginBottom: '16px', fontSize: '14px', color: '#9ca3af' }}>{pagePath}</p>
            <div style={{ marginBottom: '28px' }}>
              <h1 style={{ margin: '0 0 8px 0', fontSize: '40px', color: 'white' }}>My <span style={{ color: '#c9a84c' }}>{headerOne}</span></h1>
              <p style={{ margin: '0', fontSize: '16px', color: '#9ca3af', lineHeight: '1.5' }} dangerouslySetInnerHTML={{__html: Headertwo}}></p>
            </div>
            
            {pageKey === "favorites" && (
              <div className={BodyCSS.favourite_container}>
                <FavouritesCards text="My Favourites" count={products.length} />
                <FavouritesCards text="My Cart" count={cart.length} />
                <FavouritesCards text="My Orders" count={0} />
                <FavouritesCards text="My Wishlist" count={0} />
              </div>
            )}

            {pageKey === "cart" && (
                <div className={BodyCSS.Cart_status_container}>
                    {[
                    { id: 1, label: "Cart" },
                    { id: 2, label: "Shipping" },
                    { id: 3, label: "Payment" },
                    { id: 4, label: "Confirmation" },
                    ].map((step, index) => (
                    <Fragment key={step.id}>
                        <div className={BodyCSS.step_wrapper}>
                        <div className={BodyCSS.Cart_status}>{step.id}</div>
                        <span className={BodyCSS.step_label}>{step.label}</span>
                        </div>

                        {index !== 3 && <div className={BodyCSS.line}></div>}
                    </Fragment>
                    ))}
                </div>
            )}
          </div>
          {products.length === 0 ? (
            <p>No favorite items</p>
          ) : (
            <div className={BodyCSS.body_container}>
              {products.map((item) => (
                <Card pageKey={pageKey} key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      );
}
