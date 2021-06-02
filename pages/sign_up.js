import Head from 'next/head';
import Footer from "../components/Footer"

export default function sign_up() {
    return (
        <div >
            <Head>
                <title>TrustPaddi sign up</title>
            </Head>
            <div className="container text-center main ">
                <div className="form-section">
                    <h2 id="titleText">Sign Up</h2>
                        <input type="text" name="Full Name" id="FullName" className="input" placeholder="Full Name" />
                        <br />
                        <input type="email" name="Email" id="email" className="input" placeholder="Email" />
                        <br />
                        <input
                            type="number"
                            name="Phone Number"
                            id="phoneNumber"
                            className="input"
                            placeholder="Phone"
                        />
                        <br />
                        <input type="password" name="Password" id="password" className="input" placeholder="Password" />
                        <br />
                        <select id="sellerType" name="sellerType" className="input">
                            <option value="business seller">I am a Business Seller</option>
                            <option value="dealer">I am a Dealer</option>
                        </select>
                        <div className="form-footer flex">
                            <div>
                                <a href="ForgotPass.js">Register as a Buyer</a>
                            </div>
                        </div>
                        <div className="pt-3 pb-3">
                            <button className="btn  btn-md btn2">Sign Up</button>
                        </div>

                        <p className="underscript">
                            Have an account? <a href="./SignIn.js">Sign In</a>
                        </p>
                </div>
            </div>
            <Footer/>
            <style jsx>
                {`
                    .btn2 {
                        filter: drop-shadow(0 0 10px #e4deec) !important;
                        box-shadow: 0 0 10px 0 #a2d0ff !important;
                        color: #ffffff !important;
                        font-weight: bold !important;
                        width: 25rem !important;
                        background-color: #210070 !important;
                    }
                    .main {
                        max-width: 500px;
                        margin: auto;
                        padding-top: 13%;
                    } 
                    #titleText {
                        font-size: 2rem;
                    }
                    .subtitle {
                        font-size: 1rem;
                        color: grey;
                        margin-top: -2.5rem;
                    }
                    .input {
                        height: 2.7rem;
                        width: 25rem;
                        border: none;
                        background-color: #eff0f7;
                        margin: 0.7rem 0;
                    }
                    input[ type=number ] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input[ type=email ] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input[ type=password] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input[ type=text ] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    option{
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input:focus {
                        outline: none;
                    }
                    select:focus {
                        outline: none
                    }
                    select{
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding-left: 20px;
                        
                    }
                    ::-webkit-input-placeholder {
                        /* Edge */
                        padding: 7px !important;
                        color: #000000 !important;
                        font-weight: bold !important;
                    }

                    :-ms-input-placeholder {
                        /* Internet Explorer 10-11 */
                        padding: 7px !important;
                        color: #000000 !important;
                        font-weight: bold !important;
                    }

                    ::placeholder {
                        padding: 7px !important;
                        color: #000000 !important;
                        font-weight: bold !important;
                        font-size: 14px !important;
                    }
                    /* =========mobile screen====== */
                    @media screen and (max-width: 479px) {
                        .input {
                            height: 2.7rem;
                            width: 16rem;
                            border: none;
                            background-color: #eff0f7;
                            margin: 0.7rem 0;
                        }
                        .btn2 {
                            filter: drop-shadow(0 0 10px #e4deec) !important;
                            box-shadow: 0 0 10px 0 #a2d0ff !important;
                            color: #ffffff !important;
                            font-weight: bold !important;
                            width: 16rem !important;
                            background-color: #210070 !important;
                        }
                        .main {
                            margin: auto;
                            padding-top: 50%;
                        } 
                    }
                   
                `}
            </style>
        </div>
    );
}
