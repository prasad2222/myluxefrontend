import  {useCart} from '../context/FavoritesContext';
// import { useAddress } from '../context/FavoritesContext';
import { Address } from './Address';
import { CommonHeroSection } from './CommonHeroSection';
import { CartItem } from './CartItem';
import BodyCSS from "./BodyComponent.module.css";
import { useState } from 'react';
import { cartCalculator } from '../Utils/CartCalculator';
import { Header } from './Header';

export const AddToCart = () => {
    const { cart } = useCart();
    // const { savedAddress } = useAddress();
    const [delivery, setDelivery] = useState('standard');
    const [coupon, setCoupon] = useState('');
    const [address, setAddress] = useState("");
    const [payementKey, setPaymentKey] = useState(0);
    const [addresskey, setAddressKey] = useState(0);
    
    const { subtotal, deliveryCharge, discount, tax, total } = cartCalculator(cart, delivery, coupon);

    const handleProceedToCheckout = () => {
        setAddressKey(1);
    }

    const handleProceedToPayment = () => {
        setPaymentKey(1);
        handlePayment();
    };

    const handlePayment = async () => {

        if (!window.Razorpay) {
            alert("Razorpay SDK failed to load");
            return;
        }

        const options = {

            key: import.meta.env.VITE_RAZORPAY_KEY_ID,

            amount: ( total * 100),

            currency: "INR",

            name: "Ra Store",

            description: "Order Payment",

            handler: function (response) {

                console.log("Payment Success");

                console.log(response);

                alert("Payment Successful");
            },

            prefill: {
                name: "Prasad",
                email: "test@gmail.com",
                contact: "9999999999",
            },

            theme: {
                color: "#3399cc",
            },
        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();
    };

    return (
        <div className = {BodyCSS.cart_page} style={{ paddingTop: '70px' }}>
            <CommonHeroSection 
                pagePath="Home / My Cart" 
                headerOne="Cart" 
                Headertwo={`(${cart.length}) Items in your cart`}
                products={cart}
                pageKey="cart" 
            />

            {/* MAIN LAYOUT */}
            <div className={BodyCSS.cart_layout}>
                {/* Left section */}
                {addresskey === 0 ? (
                    <div className={BodyCSS.left_section}>
                        {/* copuns and offers section */}
                        <div className={BodyCSS.coupon_container}>
                            <h2 className={BodyCSS.coupon_title}>🏷️ Apply Coupon / Gift Card</h2>

                            <div className={BodyCSS.coupon_input_box}>
                                <input type="text" placeholder="Enter coupon code"  value = {coupon} onChange={(e)=>setCoupon(e.target.value)}/>
                                <button>Apply</button>
                            </div>

                            {/* Success Message */}
                            <div className={BodyCSS.coupon_success}>
                                ✓ Coupon <b>{coupon}</b> applied! You save an extra ₹{discount} on this order.
                            </div>

                            {/* Coupon Pills */}
                            <div className={BodyCSS.coupon_list}>
                                <div className={BodyCSS.coupon_item}  onClick={() => setCoupon("LUXE20")}>LUXE20 — 20% off</div>
                                <div className={BodyCSS.coupon_item}  onClick={() => setCoupon("FREESHIP")}>FREESHIP — Free delivery</div>
                                <div className={BodyCSS.coupon_item}  onClick={() => setCoupon("FIRST10")}>FIRST10 — ₹10% off</div>
                            </div>
                        </div>
                        
                        {/* Delivery Options */}
                        <div className= {BodyCSS.delivery_container}>
                            <header className= {BodyCSS.delivery_header}>🚚 Choose Delivery Speed</header>
                            <div className= {BodyCSS.delivery_card}>
                                <input type="radio" id="standard" name="delivery" value="standard"  checked={delivery === "standard"} onChange={(e) => setDelivery(e.target.value)} />
                                <div className= {BodyCSS.delivery_content}>
                                    <label htmlFor="standard" className= {BodyCSS.delivery_title}>
                                    Standard Delivery
                                    </label>
                                    <p className= {BodyCSS.delivery_desc}>
                                    Delivered in 3–5 business days
                                    </p>
                                </div>
                                <span className= {BodyCSS.delivery_price}>FREE</span>
                            </div>
                            <div className= {BodyCSS.delivery_card}>
                                <input type="radio" id="express" name="delivery" value="express"  checked={delivery === "express"} onChange={(e) => setDelivery(e.target.value)} />
                                <div className= {BodyCSS.delivery_content}>
                                    <label htmlFor="express" className= {BodyCSS.delivery_title}>
                                        Express Delivery
                                    </label>
                                    <p className= {BodyCSS.delivery_desc}>
                                        Delivered in 1–2 business days
                                    </p>
                                </div>
                                <span className= {BodyCSS.delivery_price}>₹99</span>
                            </div>
                            <div className= {BodyCSS.delivery_card}>
                                <input type="radio" id="overnight" name="delivery" value="overnight"  checked={delivery === "overnight"} onChange={(e) => setDelivery(e.target.value)} />
                                <div className= {BodyCSS.delivery_content}>
                                    <label htmlFor="overnight" className= {BodyCSS.delivery_title}>
                                        Same Day Delivery
                                    </label>
                                    <p className= {BodyCSS.delivery_desc}>
                                        Delivered today by 10 PM · Order within 2h
                                    </p>
                                </div>
                                <span className= {BodyCSS.delivery_price}>₹199</span>
                            </div>
                        </div>
                    </div> )  : (null)
                }

                { addresskey === 1 ? (
                    /* Address Section */
                        <div className={BodyCSS.left_section}>
                            <Address />
                        </div> 
                ) : null}

                {/* {
                    payementKey === 1 && (
                        <div className={BodyCSS.left_section}>
                        
                        <h2 style={{ marginBottom: "20px" }}>
                            Payment Section
                        </h2>

                        <button
                            className={BodyCSS.payment_btn}
                            onClick={() => console.log("Payment Button Clicked")}
                        >
                            Pay Now
                        </button>

                        </div>
                    )
                } */}
                
                {/* Right Section */}
                <div className={BodyCSS.right_section}>
                    {/* order summary section */}
                    <div className={BodyCSS.order_summary}>
                        <div className={BodyCSS.order_summary_header}>
                            <h2>Order Summary</h2>
                            <p>{cart.length} items selected</p>
                        </div>
                        <div className={BodyCSS.order_summary_content}>
                            <p> Subtotal ({cart.length} items) </p>
                            <p><span style={{ color: '#000000' }}>₹{subtotal}</span></p>
                        </div>
                        <div className={BodyCSS.order_summary_content}>
                            <p>Delivery:</p>
                            <p><span style={{ color: '#000000' }}>₹{deliveryCharge}</span></p>
                        </div>
                        <div className={BodyCSS.order_summary_content}>
                            <p>Tax (18%):</p>
                            <p><span style={{ color: '#000000' }}>₹{tax}</span></p>
                        </div>
                        {coupon && (
                            <div className={BodyCSS.order_summary_content}>
                                <p>Coupon Discount:</p>
                                <p><span style={{ color: '#000000' }}>₹{discount}</span></p>
                            </div>
                        )}
                        <div className={BodyCSS.order_summary_content}>
                                <p>Total Payable:</p> 
                                <p><span style={{ color: '#000000' }}>₹{total}</span></p>
                        </div>
                        { addresskey === 0 ? (
                            <button onClick={handleProceedToCheckout} className={BodyCSS.checkout_button}>
                                Proceed to Checkout
                            </button>
                        ) : <button onClick= {handleProceedToPayment}className={BodyCSS.checkout_button}>
                                Pay Now
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}