import RegisterCss from "./RegisterPage.module.css";
import { FaGift, FaTruck, FaUndo, FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useState} from "react"

export const RegisterPage = () => {

    const [formData,setFormData] = useState({
        first_name : "",
        last_name : "",
        email : "",
        mobile : "",
        password : "",
        gender : "",
    })

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

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleRegister = (e) => {
        // e.prevent.default();
        // alert(JSON.stringify(formData, null, 2));
        console.log(formData);

        const apiResult = fetch(url,)
    }

    return(
        <>
            <div className = {RegisterCss.RegisterContainer}>
                {/* Product section */}
                <div className={RegisterCss.left}>
                    <div className={RegisterCss.logo}>
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

                    <div className={RegisterCss.secondContainer}>
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
                {/* Form section*/}
                <div className={RegisterCss.right}>
                    <form action="" className={RegisterCss.form}>
                        <div>
                            <span className={RegisterCss.rightSubHeader}>Create your account</span><br />
                            <span className={RegisterCss.grey}>Already a member? <span className={RegisterCss.red}><Link to="/Login">Sign in here</Link></span></span>
                        </div>

                        <div className={RegisterCss.row}>
                            <div className={RegisterCss.field}>
                                <label>First Name</label>
                                <input type="text" placeholder="Ananya" name="first_name" value={formData.first_name} onChange={handleChange}/>
                            </div>

                            <div className={RegisterCss.field}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Sharma" name="last_name" value={formData.last_name} onChange={handleChange}/>
                            </div>

                        </div>

                        <div className={RegisterCss.field}>
                            <label>Email address</label>
                            <input type="email" placeholder="abc@gmail.com" name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className={RegisterCss.field}>
                            <label>Mobile Number</label>
                            <input type="text" placeholder="1234567890" value={formData.mobile} name="mobile" onChange={handleChange}/>
                        </div>
                        <div className={RegisterCss.field}>
                            <label>PassWord</label>
                            <input type="password" id=""  name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                        <div className={RegisterCss.field}>
                            <label>Gender</label>
                        </div>
                        <div className={RegisterCss.radiosContainer} >
                            <div className={RegisterCss.radios}>
                                <label ><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange}/>Male</label>
                            </div>
                            <div className={RegisterCss.radios}>
                                <label ><input type="radio" name="gender" value="FeMale" checked={formData.gender === "FeMale"} onChange={handleChange}/>FeMale</label>
                            </div>
                            <div className={RegisterCss.radios}>
                                <label ><input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange}/>Other</label>
                            </div>
                        </div>

                        <div className={RegisterCss.terms}>
                            <input type="checkbox" name="Terms and Conditions" id="" />
                            <span>I agree to LUXE's <span style={{color: '#ff6666'}}>Terms of Service</span> and <span style={{color:'#ff6666'}}>Privacy Policy</span>. I consent to receive order updates via email & SMS.</span>
                        </div>

                        <div className={RegisterCss.accountButtondiv}>
                            <button className={RegisterCss.accountButton} onClick={handleRegister} type="submit">Create My Account</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}