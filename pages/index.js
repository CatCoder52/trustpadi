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
                <div className={Style.container}>
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

            {/* {{{section 2 start}}} */}
            <main className="">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p
                                className="text-center"
                                style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                                What Is <span style={{color: '#f49f1c'}}>TrustPaddi</span>
                            </p>
                            <p className="text-center" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                TrustPaddi is Nigerians most trusted escrow platform built with the latest technology
                                which enables safer transactions between online sellers & buyers whether online or
                                offline, TrustPaddi has got you covered. TrustPaddi protects the interest of both
                                parties (Buyer & Seller). We enable online sellers make more sale's and gain the trust
                                of there potential customers with our TrustPaddi links. We ensure that there online
                                customers can buy without fear thus bridging the trust gap between online buyers and
                                online sellers...
                            </p>
                            <div className="pt-3 pb-3">
                                <button className="btn  btn-md my-2 my-sm-0 ml-3 btn2">Know More</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Image src="/../public/asset/trustpaddi.jpeg" alt="logo" width={400} height={300} />
                        </div>
                    </div>
                </div>
            </main>
            {/* {{{section 2 end}}} */}

            {/* {{{section 3 start}}} */}
            <main className="pt-5">
                <div className="container text-center">
                    <p className="text-center" style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                        What Is <span style={{color: '#f49f1c'}}>Escrow</span>
                    </p>
                    <p className="text-center" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                        TrustPaddi is Nigerians most trusted escrow platform built with the latest technology which
                        enables safer transactions between online sellers & buyers whether online or offline, TrustPaddi
                        has got you covered. TrustPaddi protects the interest of both parties (Buyer & Seller). We
                        enable online sellers make more sale's and gain the trust of there potential customers with our
                        TrustPaddi links. We ensure that there online customers can buy without fear thus bridging the
                        trust gap between online buyers and online sellers...
                    </p>
                </div>
            </main>
            {/* {{{section 3  end}}} */}

            {/* {{{section 4 start}}} */}
            <main className="pt-5">
                <div className="container text-center">
                    <p className="text-center " style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                        How It <span style={{color: '#f49f1c'}}>Works</span>
                    </p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/trustpaddi.jpeg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        TrustPaddi is Nigerians most trusted escrow platform built with the latest
                                        technology which enables safer transactions between online sellers & buyers
                                        whether online or offline, TrustPaddi
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/trustpaddi.jpeg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        TrustPaddi is Nigerians most trusted escrow platform built with the latest
                                        technology which enables safer transactions between online sellers & buyers
                                        whether online or offline, TrustPaddi
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 p my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/trustpaddi.jpeg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        TrustPaddi is Nigerians most trusted escrow platform built with the latest
                                        technology which enables safer transactions between online sellers & buyers
                                        whether online or offline, TrustPaddi
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/trustpaddi.jpeg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        TrustPaddi is Nigerians most trusted escrow platform built with the latest
                                        technology which enables safer transactions between online sellers & buyers
                                        whether online or offline, TrustPaddi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* {{{section 4  end}}} */}

            <style jsx>
                {`
                    .btn1 {
                        filter: drop-shadow(0 0 10px #e7ba73) !important;
                        box-shadow: 0 0 10px 0 #e7ba73 !important;
                        color: #ffffff !important;
                        width: 300px !important;
                        font-weight: bold !important;
                        background-color: #f49f1c !important;
                    }
                    .btn2 {
                        filter: drop-shadow(0 0 10px #e4deec) !important;
                        box-shadow: 0 0 10px 0 #a2d0ff !important;
                        color: #ffffff !important;
                        width: 300px !important;
                        font-weight: bold !important;
                        background-color: #210070 !important;
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
