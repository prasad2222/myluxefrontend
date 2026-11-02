import RegisterCss from "./RegisterPage.module.css";
import { FaArrowAltCircleLeft,FaGift, FaTruck, FaUndo, FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginPage = () =>{


    const features = [
            {
                icon: FaGift,
                title: "Exclusive member deals",
                desc: "Up to 40% off for members"
            },
            {
                icon: FaTruck,
                title: "Free express delivery",
                desc: "On all orders above ₹999"
            },
            {
                icon: FaUndo,
                title: "Easy 30-day returns",
                desc: "No questions asked policy"
            },
            {
                icon: FaBox,
                title: "Curated collections",
                desc: "New arrivals every week"
            }
        ];


    return (
        <div className={RegisterCss.RegisterContainer}>

            {/* <div>
                <FaArrowAltCircleLeft/>
                Back to SignUp
            </div> */}
            <div className={RegisterCss.LoginLeft}>
                <div className={RegisterCss.ArrowCss}>
                    <FaArrowAltCircleLeft/>
                    <Link to="/">Back to SignUp</Link>
                </div>
                
                <form action="/Home" className={RegisterCss.form}>
                    <div className={RegisterCss.Loginheader}>
                        <span className={RegisterCss.rightSubHeader}>Sign in to your account</span><br />
                        <span className={RegisterCss.grey}>New to LUXE? <span className={RegisterCss.red}><Link to="/">Create a free account</Link></span></span>
                    </div>

                    <div className={RegisterCss.field}>
                        <label>Email address</label>
                        <input type="email" placeholder="abc@gmail.com"/>
                    </div>

                    <div className={RegisterCss.field}>
                        <label>PassWord</label>
                        <input type="password" name="" id="" />
                    </div>
                    
                    <div className={RegisterCss.accountButtondiv}>
                        <button className={RegisterCss.accountButton} type="submit">Sign in to Luxe</button>
                    </div>

                </form>
            </div>

            <div className={RegisterCss.left}>
                <div className={RegisterCss.LoginLogo}>
                    <h1>
                        LU<span>X</span>E
                    </h1>
                    <h1>
                        Your fashion
                        <br />
                        journey starts here.
                    </h1>
                    <p>
                        Join thousands of style-conscious shoppers who <br />
                        trust LUXE for curated, premium fashion delivered <br />
                        to their door.
                    </p>
                </div>

                <div className={RegisterCss.LoginsecondContainer}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className={RegisterCss.feature}>
                                <div className={RegisterCss.iconWrapper}>
                                    <Icon className={RegisterCss.icon} />
                                </div>
                                <div className={RegisterCss.featureContent}>
                                    <span className={RegisterCss.subHeader}>{feature.title}</span>
                                    <span className={RegisterCss.subHeaderValue}>{feature.desc}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}