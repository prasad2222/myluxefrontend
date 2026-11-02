import FooterCss from './Footer.module.css'
export const Footer = () => {
    return(
        <footer className={FooterCss.footer_container}>
            <div className = {FooterCss.footer}>
                <h2>LUXE</h2>
                <pre className={FooterCss.desc}>Your curated destination for premium 
                    fashion. Explore thousands of styles from 
                    the world's top brands.
                </pre>
            </div>

            <div className = {FooterCss.footer}>
                <h4>Shop</h4>
                <a href="">New Arrivals</a>
                <a href="">Women</a>
                <a href="">Men</a>
                <a href="">Accessories</a>
                <a href="">Sale</a>
            </div>

            <div className = {FooterCss.footer}>
                <h4>Help</h4>
                <a href="">Contact Us</a>
                <a href="">Returns</a>
                <a href="">Shipping</a>
                <a href="">FAQs</a>
                <a href="">Size Guide</a>
            </div>

            <div className = {FooterCss.footer}>
                <h4>Company</h4>
                <a href="">About Us</a>
                <a href="">Careers</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
                <a href="">Sustainability</a>

            </div>
        </footer>
    )
}