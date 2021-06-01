import Head from 'next/head';

export default function sign_in() {
    return (
        <div>
           <Head>
                <title>TrustPaddi sign in</title>
            </Head>
            <div className="container main text-center">
                <div className="form-section">
                    <h2 id="titleText">Sign In</h2>
                    <input type="text" name="Full Name" id="FullName" className="input" placeholder="Full Name" />
                    <br />
                    <input type="email" name="Email" id="email" className="input" placeholder="Email" />
                    <br />

                    <div className="pt-3 pb-3">
                        <button className="btn  btn-md btn2">Sign in</button>
                    </div>

                    <p className="underscript">
                        Don't Have an account? <a href="./SignIn.js">Sign up</a>
                    </p>
                </div>
            </div>

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
                    option {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input:focus {
                        outline: none;
                    }
                    select:focus {
                        outline: none;
                    }
                    select {
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
