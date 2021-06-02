import Head from 'next/head';
import Style from '../styles/landing.module.css';
import Image from 'next/image';
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div>
            <Head>
                <title>TrustPaddi Home</title>
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
                        <button className="btn  btn-md my-2 my-sm-0 ml-3 btn1">Get Started Now</button>
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
                <div className="container text-center pt-5">
                    <p className="text-center" style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                        What Is <span style={{color: '#f49f1c'}}>Escrow</span>
                    </p>
                    <p className="text-center pt-5" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                        An "Escrow" is a financial agreement in which a third party controls payments between two
                        transacting parties and only releases the funds involved when all of the terms of a given
                        contract are met.
                    </p>
                    <p className="text-center" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                        Therefore, Whether you’re dealing with a real estate transaction, an online sale or a Crypto
                        trader etc escrow is the best means to transact Securely and this is what TrustPaddi offers,
                        Escrow Protection at it's best.
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
                    <div className="row pt-5">
                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/agre.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        Buyer and seller agree on the terms of the transaction: Eg Price, duration,
                                        proposed delivery date etc.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/create.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        Buyer or Seller Initiates (Begins) the escrow: either parties can creates an
                                        escrow transaction .
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 p my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/paytrustpaddi.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        Buyer pays to TrustPaddi: TrustPaddi holds on to the payment.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/delivery.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        merchise is shipped to the buyer: Seller ships the merchandise to you or we help
                                        you retrieve the merchandise and deliver it to you.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/agre.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        Buyer confirms the merchandise : He/she verifies the product to see if its
                                        exactly what he ordered.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 my-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src="/../public/asset/payuser.svg" alt="logo" width={80} height={80} />
                                </div>
                                <div className="col-10 text-left">
                                    <span style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                        TrustPaddi Pays the Seller. Now you can see that, the whole process is Simple &
                                        Automated.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* {{{section 4  end}}} */}

            {/* {{{section 5 start}}} */}
            <main className="pt-5 pb-5">
                <div className="container text-center">
                    <p className="text-center" style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                        Who Can Use <span style={{color: '#f49f1c'}}>TrustPaddi</span>
                    </p>
                    <div className="row pt-5">
                        <div className="col-sm-12 col-md-4  my-3">
                            <div className="card border-0" style={{backgroundColor: '#f49f1c'}}>
                                <div className="card-body">
                                    <div className="img_bg ">
                                        <div className="icon">
                                            <Image src="/../public/asset/p2p.svg" alt="logo" width={200} height={200} />
                                        </div>
                                    </div>
                                    <h3
                                        className="pt-3"
                                        style={{fontSize: '1em', fontWeight: 'bold', color: '#210070'}}>
                                        INDIVIDUALS
                                    </h3>
                                    <p
                                        className="pt-3"
                                        style={{fontSize: '0.8em', fontWeight: 'bold', color: '#ffffff'}}>
                                        Individuals/ Buyer [Person to Person (P2P), Crypto Trader's & Buyer's etc] : Any
                                        individual can use TrustPaddi especially when it comes to making transactions
                                        with unknown online vendors or people, we act as a middle man between both
                                        parties and ensure that both parties are satisfied.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4  my-3">
                            <div className="card border-0" style={{backgroundColor: '#210070'}}>
                                <div className="card-body">
                                    <div className="img_bg ">
                                        <div className="icon">
                                            <Image
                                                src="/../public/asset/business.svg"
                                                alt="logo"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                    <h3
                                        className="pt-3"
                                        style={{fontSize: '1em', fontWeight: 'bold', color: '#f49f1c'}}>
                                        BUSINESSES
                                    </h3>
                                    <p
                                        className="pt-3"
                                        style={{fontSize: '0.8em', fontWeight: 'bold', color: '#ffffff'}}>
                                        Business owners /Online Vendors / Service Providers / Indust [Business to
                                        Consumer (B2C)/Business to Business (B2B)] : Any Business owner can use
                                        TrustPaddi, with our escrow services we make it easier to gain customers trust,
                                        boost your sales, avoid the risk of pay on delivery and we keep un serious
                                        customers away from your business.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 my-3">
                            <div className="card border-0" style={{backgroundColor: '#f49f1c'}}>
                                <div className="card-body">
                                    <div className="img_bg ">
                                        <div className="icon">
                                            <Image
                                                src="/../public/asset/online.svg"
                                                alt="logo"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                    <h3
                                        className="pt-3"
                                        style={{fontSize: '1em', fontWeight: 'bold', color: '#210070'}}>
                                        ONLINE MARKETPLACES & STORSS
                                    </h3>
                                    <p
                                        className="pt-3"
                                        style={{fontSize: '0.8em', fontWeight: 'bold', color: '#ffffff'}}>
                                        Online Marketplaces & e-commerce websites: Potential customers are always
                                        skeptical about certain e-commerce sites, the best way to gain your customers
                                        trust is to integrate TrustPaddi with your e-commerce website or marketplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* {{{section 5  end}}} */}

            {/* {{{section 6 start}}} */}
            <main className="pt-5">
                <div className="container text-center">
                    <p className="text-center " style={{color: '#210070', fontWeight: 'bolder', fontSize: '1.5em'}}>
                        Why Use <span style={{color: '#f49f1c'}}>TrustPaddi</span>
                    </p>
                    <div className="row pt-5">
                        <div className="col-sm-12 col-md-4">
                            <div className="icon">
                                <Image src="/../public/asset/trusted.svg" alt="logo" width={80} height={80} />
                            </div>
                            <h3 className="pt-3" style={{fontSize: '1em', fontWeight: 'bold', color: '#02bc77'}}>
                                Trusted
                            </h3>
                            <p className="pt-3" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                Our platform has been used by many and trusted by all.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="icon">
                                <Image src="/../public/asset/save.svg" alt="logo" width={80} height={80} />
                            </div>
                            <h3 className="pt-3" style={{fontSize: '1em', fontWeight: 'bold', color: '#4169e2'}}>
                                Secure
                            </h3>
                            <p className="pt-3" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                TrustPaddi ensures buyer and seller protection, and protects the interest of both
                                parties.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="icon">
                                <Image src="/../public/asset/fast.svg" alt="logo" width={80} height={80} />
                            </div>
                            <h3 className="pt-3" style={{fontSize: '1em', fontWeight: 'bold', color: '#feba4f'}}>
                                Fast Delivery
                            </h3>
                            <p className="pt-3" style={{fontSize: '0.9em', fontWeight: 'bold', opacity: '0.5'}}>
                                We also help deliver goods faster to customers with our network of trusted logistics
                                partners.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* {{{section 6 end}}} */}
            <div className="pt-3 text-center">
                <button className="btn  btn-md my-2 my-sm-0 ml-3 btn1">Get Started Now</button>
            </div>

            <Footer/>

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
                    .img_bg {
                        background-color: #ffffff;
                        border-radius: 100%;
                        height: 130px;
                        width: 130px;
                        justify-content: center;
                        align-content: center;
                        align-self: center;
                        align-items: center;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .icon {
                        padding: 30px;
                        justify-content: center;
                        align-content: center;
                        align-self: center;
                        align-items: center;
                        margin-left: auto;
                        margin-right: auto;
                    }
                
                `}
            </style>
        </div>
    );
}
