import Head from 'next/head';
import {useState, useEffect} from 'react';
import Style from '../styles/transation.module.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

export default function create_transation() {
    const [formData, setFormData] = useState({
        email: 'jkp@gmsil.com',
        phone: '',
        title: '',
        price: '',
        discription: ''
    });
    const [componentToShow, setcomponentToShow] = useState({
        email: true,
        phone: false,
        title: false,
        price: false,
        discription: false
    });

    const {email, phone, title, discription, price} = formData;
    const onChangeHandelr = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const set_next_to_phone = () => {
        if (formData.email.length >= 8) {
            setcomponentToShow({
                phone: true,
                email: false
            });
        }
    };

    const set_pev_to_email = () => {
        if (formData.email.length >= 5) {
            setcomponentToShow({
                phone: false,
                email: true
            });
        }
    };

    const set_next_to_title = () => {
        if (formData.phone.length >= 11) {
            setcomponentToShow({
                phone: false,
                title: true
            });
        }
    };

    const set_pev_to_phone = () => {
        if (formData.phone.length >= 11) {
            setcomponentToShow({
                phone: true,
                title: false
            });
        }
    };

    const set_next_to_discription = () => {
        if (formData.title.length > 5) {
            setcomponentToShow({
                discription: true,
                title: false
            });
        }
    };

    const set_pev_to_title = () => {
        if (formData.title.length > 5) {
            setcomponentToShow({
                discription: false,
                title: true
            });
        }
    };

    const set_pev_to_discription = () => {
        if (formData.title.length > 5) {
            setcomponentToShow({
                discription: true,
                price: false
            });
        }
    };
    const set_next_to_price = () => {
        if (formData.discription.length > 0) {
            setcomponentToShow({
                discription: false,
                price: true
            });
        }
    };

    return (
        <div>
            <Head>
                <title>Transaction</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={Style.main}>
                {/* {{{============= EMAIL START ================}}} */}
                {componentToShow.email === true && (
                    <div className="pt-5 container">
                        <div className={Style.card_bg}>
                            <div className="row">
                                <div className="col-2 d-none d-md-block d-lg-block " />
                                <div className="col-sm-8 col-md-8">
                                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                                        <div className="text-center pt-5">
                                            <p className={Style.question}>provide partner's email</p>
                                        </div>
                                        <div className="card-body">
                                            <div className={Style.img_bg}>
                                                <img
                                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                                    alt="email"
                                                    className={Style.icon}
                                                />
                                            </div>
                                            <div className="pt-3 text-center">
                                                <input
                                                    placeholder="Email"
                                                    name="email"
                                                    value={email}
                                                    type="email"
                                                    onChange={e => onChangeHandelr(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block d-lg-block  text-center nex_btn ">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        disabled={formData.email.length >= 8 ? false : true}
                                        onClick={() => set_next_to_phone()}>
                                        <AiOutlineArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* {{mobile btn}} */}
                        <div className="d-md-none d-lg-none d-sm-block text-center pt-5 mx-auto">
                            <button
                                type="button"
                                className="btn btn-primary btn-sm "
                                disabled={formData.email.length >= 8 ? false : true}
                                onClick={() => set_next_to_phone()}>
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {/* {{{============= EMAIL END ================}}} */}

                {/* {{{============= PHONE START ================}}} */}
                {componentToShow.phone === true && (
                    <div className="pt-5 container">
                        <div className={Style.card_bg}>
                            <div className="row">
                                <div className="col-2 d-none d-md-block d-lg-block  text-center nex_btn ">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        onClick={() => set_pev_to_email()}>
                                        <AiOutlineArrowLeft />
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                                        <div className="text-center pt-5">
                                            <p className={Style.question}>provide partner's phone number</p>
                                        </div>
                                        <div className="card-body">
                                            <div className={Style.img_bg}>
                                                <img
                                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                                    alt="email"
                                                    className={Style.icon}
                                                />
                                            </div>
                                            <div className="pt-3 text-center">
                                                <input
                                                    placeholder="Phone"
                                                    name="phone"
                                                    value={phone}
                                                    type="text"
                                                    onChange={e => onChangeHandelr(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn ">
                                    <button
                                        type="button"
                                        onClick={() => set_next_to_title()}
                                        disabled={formData.phone.length >= 11 ? false : true}
                                        className="btn btn-primary btn-lg mx-auto">
                                        <AiOutlineArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* {{mobile btn}} */}
                        <div className="d-md-none d-lg-none d-sm-block text-center pt-5">
                            <button
                                onClick={() => set_pev_to_email()}
                                type="button"
                                className="btn btn-primary btn-sm mr-5">
                                <AiOutlineArrowLeft />
                            </button>
                            <button
                                type="button"
                                onClick={() => set_next_to_title()}
                                disabled={formData.phone.length >= 11 ? false : true}
                                className="btn btn-primary btn-sm ml-5">
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {/* {{{=============  PHONE END ================}}} */}

                {/* {{{============= TITLE START ================}}} */}
                {componentToShow.title === true && (
                    <div className="pt-5 container">
                        <div className={Style.card_bg}>
                            <div className="row">
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn ">
                                    <button
                                        onClick={() => set_pev_to_phone()}
                                        type="button"
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowLeft />
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                                        <div className="text-center pt-5">
                                            <p className={Style.question}>what is the title of this transation?</p>
                                        </div>
                                        <div className="card-body">
                                            <div className={Style.img_bg}>
                                                <img
                                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                                    alt="email"
                                                    className={Style.icon}
                                                />
                                            </div>
                                            <div className="pt-3 text-center">
                                                <input
                                                    placeholder="Title"
                                                    name="title"
                                                    value={title}
                                                    type="text"
                                                    onChange={e => onChangeHandelr(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn ">
                                    <button
                                        type="button"
                                        onClick={() => set_next_to_discription()}
                                        disabled={formData.title.length > 5 ? false : true}
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* {{mobile btn}} */}
                        <div className="d-md-none d-lg-none d-sm-block text-center pt-5">
                            <button
                                type="button"
                                onClick={() => set_pev_to_phone()}
                                className="btn btn-primary btn-sm mr-5">
                                <AiOutlineArrowLeft />
                            </button>
                            <button
                                onClick={() => set_next_to_discription()}
                                type="button"
                                disabled={formData.title.length > 5 ? false : true}
                                className="btn btn-primary btn-sm ml-5">
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {/* {{{=============  TITLE END ================}}} */}

                {/* {{{============= DISCRIPTION START ================}}} */}
                {componentToShow.discription === true && (
                    <div className="pt-5 container">
                        <div className={Style.card_bg}>
                            <div className="row">
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn">
                                    <button
                                        onClick={() => set_pev_to_title()}
                                        type="button"
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowLeft />
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                                        <div className="text-center pt-5">
                                            <p className={Style.question}>
                                                write a better discription of this transaction
                                            </p>
                                        </div>
                                        <div className="card-body">
                                            <div className={Style.img_bg}>
                                                <img
                                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                                    alt="email"
                                                    className={Style.icon}
                                                />
                                            </div>
                                            <div className="pt-3 text-center">
                                                <input
                                                    placeholder="discription"
                                                    name="discription"
                                                    value={discription}
                                                    type="text"
                                                    onChange={e => onChangeHandelr(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn ">
                                    <button
                                        type="button"
                                        onClick={() => set_next_to_price()}
                                        disabled={formData.discription.length > 0 ? false : true}
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* {{mobile btn}} */}
                        <div className="d-md-none d-lg-none d-sm-block text-center pt-5">
                            <button
                                type="button"
                                onClick={() => set_pev_to_title()}
                                className="btn btn-primary btn-sm mr-5">
                                <AiOutlineArrowLeft />
                            </button>
                            <button
                                onClick={() => set_next_to_price()}
                                type="button"
                                disabled={formData.discription.length > 0 ? false : true}
                                className="btn btn-primary btn-sm ml-5">
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {/* {{{=============  DISCRIPTION END ================}}} */}

                {/* {{{============= PRICE START ================}}} */}
                {componentToShow.price === true && (
                    <div className="pt-5 container">
                        <div className={Style.card_bg}>
                            <div className="row">
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn">
                                    <button
                                        onClick={() => set_pev_to_discription()}
                                        type="button"
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowLeft />
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                                        <div className="text-center pt-5">
                                            <p className={Style.question}>what is the price of this transation?</p>
                                        </div>
                                        <div className="card-body">
                                            <div className={Style.img_bg}>
                                                <img
                                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                                    alt="email"
                                                    className={Style.icon}
                                                />
                                            </div>
                                            <div className="pt-3 text-center">
                                                <input
                                                    placeholder="price"
                                                    name="price"
                                                    value={price}
                                                    type="text"
                                                    onChange={e => onChangeHandelr(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-none d-md-block d-lg-block text-center nex_btn ">
                                    {/* <button
                                        type="button"
                                        onClick={() => set_next_to_price()}
                                        disabled={formData.price.length > 5 ? false : true}
                                        className="btn btn-primary btn-lg">
                                        <AiOutlineArrowRight />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        {/* {{mobile btn}} */}
                        <div className="d-md-none d-lg-none d-sm-block text-center pt-5">
                            <button
                                type="button"
                                onClick={() => set_pev_to_discription()}
                                className="btn btn-primary btn-sm mr-5">
                                <AiOutlineArrowLeft />
                            </button>
                            {/* <button
                                onClick={() => set_next_to_price()}
                                type="button"
                                disabled={formData.phone.length >= 11 ? false : true}
                                className="btn btn-primary btn-sm ml-5">
                                <AiOutlineArrowRight />
                            </button> */}
                        </div>
                    </div>
                )}

                {/* {{{=============  PRICE END ================}}} */}
            </div>

            {/* {{style for input}} */}
            <style jsx>
                {`
                    input {
                        background-color: #ffffff !important;
                        height: 50px !important;
                        border: none !important;
                        width: 100%;
                    }
                    input[ type=email ] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input[ type=text ] {
                        font-weight: bold !important;
                        font-size: 14px !important;
                        padding: 20px;
                    }
                    input:focus {
                        outline: none;
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
                    .nex_btn {
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
