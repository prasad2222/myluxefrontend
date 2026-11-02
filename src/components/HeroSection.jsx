import HeroCSS from "./Hero.module.css";
import shoppingImg from "../assets/shopping.jpg";

export const HeroSection = () => {
  return (
    <section className={HeroCSS.hero}>
      <div className={HeroCSS.left_content}>
        <p className={HeroCSS.capsule}>
          ✦ Spring / Summer 2026 Collection
        </p>

        <h1>
          Dress for the <br />
          life you want, <br />
          not the one you have.
        </h1>

        <h4>
          Explore over 12,000 curated styles from the world's finest
          fashion houses — delivered to your door in 48 hours.
        </h4>

        <div className={HeroCSS.button_group}>
          <button className={HeroCSS.primary_btn}>Shop Now</button>
          <button className={HeroCSS.secondary_btn}>
            Watch Lookbook
          </button>
        </div>
      </div>

      <div className={HeroCSS.right_content}>
        <img src={shoppingImg} alt="Luxury Shopping" />
      </div>
    </section>
  );
};