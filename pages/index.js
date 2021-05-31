import Head from 'next/head';
import Style from '../styles/landing.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* {{{section 1 start}}} */}
            <main className={Style.section1}>
                <div className="container">
                    <h1 className="section1-text d-none d-md-block d-lg-block">
                        It's Better <span className="section1-text-sub">Safe</span> Than Sorry
                    </h1>
                    <h1 className="section1-text-sm text-center d-lg-none d-md-none d-sm-block pt-5">
                        It's Better <span className="section1-text-sub">Safe</span> Than Sorry
                    </h1>
                    <p className="text-center section1-text-2 pt-3">
                        Transact Securely with online vendors & marketplaces, gain customers trust with TrustPaddi
                    </p>
                    <div className="pt-3">
                        <button className="btn  btn-md my-2 my-sm-0 ml-3 btn1">Do Business Now</button>
                    </div>
                </div>
            </main>
            {/* {{{section 1 end}}} */}

            <style jsx>
                {`
                    .container {
                        min-height: 100vh;
                        padding: 0 0.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .btn1 {
                        filter: drop-shadow(0 0 10px #e7ba73) !important;
                        box-shadow: 0 0 10px 0 #e7ba73 !important;
                        color: #ffffff !important;
                        width: 300px !important;
                        font-weight: bold !important;
                        background-color: #f49f1c !important;
                    }
                    main {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .section1-text {
                        margin-top: 50px;
                        color: #210070;
                        font-size: 4em;
                    }
                    .section1-text-sm {
                        color: #210070;
                        font-size: 2em;
                    }
                    .section1-text-sub {
                        color: #f49f1c;
                    }
                    .section1-text-2 {
                        color: #000000;
                        font-size: 0.9em;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
}
