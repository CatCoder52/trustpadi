import Head from 'next/head';
import Image from 'next/image';
import {useSate} from 'react';
import Style from '../styles/transation.module.css';

export default function create_transation() {
    return (
        <div>
            <Head>
                <title>Trasation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pt-5 container">
                <div className={Style.card_bg}>
                    <div className="card border-0" style={{backgroundColor: '#f5f7fe'}}>
                        <div className="card-body">
                            <div className={Style.img_bg}>
                                <img
                                    src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                                    alt="email"
                                    className={Style.icon}
                                />
                            </div>
                            <div className="pt-3 text-center">
                                <input placeholder="Email" name="email" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {{style for input}} */}
            <style jsx>
                {`
                    input {
                        background-color: #ffffff;
                        height: 50px;
                        border: none;
                    }
                    ::-webkit-input-placeholder {
                        /* Edge */
                        padding: 7px;
                        color: #000000;
                        font-wight: blod
                    }

                    :-ms-input-placeholder {
                        /* Internet Explorer 10-11 */
                        padding: 7px;
                        color: #000000;
                        font-wight: blod
                    }

                    ::placeholder {
                        padding: 7px;
                        color: #000000;
                        font-wight: blod
                    }
                `}
            </style>
        </div>
    );
}
