import React from 'react';
import Head from 'next/head';
import {RiSendPlaneFill} from 'react-icons/ri';

export default function faq() {
    const smallScreen = 414;

    return (
        <div>
            <Head />
            <div className="faq faq-big d-none d-md-block d-lg-block" />
            <div className="faq faq-small d-lg-none d-md-none d-sm-block" />
            <section className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 my-3 ">
                            <div className="nav flex-column nav-pills text-center" role="tablist" aria-orientation="vertical">
                                <a className="nav-link  active" data-toggle="pill" href="#question-1">
                                    What is Escrow?
                                </a>

                                <a className="nav-link" data-toggle="pill" href="#question-2">
                                    What is Escrow 2?
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 my-3">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="question-1" role="tabpanel">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus impedit
                                    quaerat sit, animi cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi
                                    repellendus ea quia est blanditiis. Dolore,{' '}
                                    <span>
                                        doloremque consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                    </span>
                                    Nostrum temporibus impedit quaerat sit, animi cupiditate natus dolor, saepe, ipsa
                                    asperiores laudantium nisi repellendus ea quia est blanditiis. Dolore, doloremque
                                    consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    temporibus impedit quaerat sit, animi cupiditate natus dolor, saepe, ipsa asperiores
                                    laudantium nisi repellendus ea quia est blanditiis. Dolore, doloremque consequuntur!
                                </div>

                                <div className="tab-pane fade" id="question-2" role="tabpanel">
                                    <b>number 2</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus impedit
                                    quaerat sit, animi cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi
                                    repellendus ea quia est blanditiis. Dolore, doloremque consequuntur! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Nostrum temporibus impedit quaerat sit,
                                    animi cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi repellendus ea
                                    quia est blanditiis. Dolore, doloremque consequuntur! Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Nostrum temporibus impedit quaerat sit, animi
                                    cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi repellendus ea quia
                                    est blanditiis. Dolore, doloremque consequuntur!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-sm-7">
                            <form>
                                <div className="input-group">
                                    <textarea className="form-control" placeholder="Ask a question..." rows="2" />
                                    <div className="input-group-append">
                                        <div className="px-2 mt-2">
                                            <button type="button" className="btn my-1 btn-primary ">
                                                <RiSendPlaneFill />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .navbar .nav-link.active::after {
                        content: '';
                        display: block;
                        width: 20px;
                        padding: 2px;
                        border-bottom: 1px solid #4169e2;
                    }
                    .faq-small {
                        margin-top: 50%;
                    }
                    .faq-big {
                        margin-top: 10%;
                    }
                    section.faq {
                        margin: 60px 0;
                    }
                    section.faq .nav .nav-link {
                        color: #b6b6b6;
                        transition: .3s ease-in-out;
                        border: 1px solid #b6b6b6;
                        border-radius: 10px;
                        width: 80%;
                        height: 70px;
                        letter-spacing: 1px;
                        font-size: 0.7em;
                        text-align: center;
                        margin-bottom: 15px;
                        padding: 20px 0px;
                    }
                    .active {
                        color: #9db1ef !important;
                        background-color: #ecf0fc !important;
                        border: 1px solid #ecf0fc !important;
                    }
                    .tab-pane {
                        background-color: #ffffff !important;
                        color: #000000 !important;
                        border: 0px !important;
                    }
                `}
            </style>
        </div>
    );
}
