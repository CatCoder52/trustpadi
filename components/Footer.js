import React from 'react'
import {FaFacebook, FaMediumM, FaYoutube} from 'react-icons/fa';
import {AiFillInstagram, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
         <footer className="footer-body mb-0 pb-0">
                <div className="footer-container">
                    <div className="row  footer-section">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Company</p>
                                        <li>About Us</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms and Conditions</li>
                                        <li>P2P Transaction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Support</p>
                                        <li>Security</li>
                                        <li>Fee Calculator</li>
                                        <li>Fraud Prevention</li>
                                        <li>Report A Bug</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Resource</p>
                                        <li>Testimonials</li>
                                        <li>FAQ</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Contact</p>
                                        <li>contactus@trustpaddi.com</li>
                                        <li>Lagos: +2349033275449</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaFacebook className="ml-3" />
                    <AiFillInstagram className=" ml-3" />
                    <AiFillLinkedin className=" ml-3" />
                    <AiOutlineTwitter className=" ml-3" />
                    <FaMediumM className="ml-3" />
                    <FaYoutube className="ml-3" />

                    <div className="pt-4">
                        <img
                            alt="pic"
                            style={{height: '20px'}}
                            className="mr-2 ml-3"
                            src={'https://trav4college.com/assets/icons/nigeria.svg'}
                        />
                        <span>Port Harcourt, Lagos, Nigeria</span>
                    </div>
                    {/* <div className="pt-4">
                        <img
                            alt="pic"
                            style={{height: '20px'}}
                            className="mr-2 ml-3"
                            src={'https://trav4college.com/assets/icons/united-states.svg'}
                        />
                        <span>770 Old Roswell Place Suite I-200, Roswell, GA 30076,USA</span>
                    </div> */}
                </div>
            </footer>


            <style jsx>
                {`
                   .footer-body {
                        background-color: #a2d0ff;
                        margin-top: 8%;
                        margin-bottom: 10%;
                    }
                    .footer-header-text {
                        font-size: 25px;
                        font-weight: bold;
                    }
                    ul {
                        list-style-type: none;
                    }
                    li {
                        font-size: 17px;
                        font-weight: 400;
                        color: #000000;
                        opacity: 0.8;
                        line-height: 2em;
                    }
                    .footer-container {
                        padding-left: 50px;
                        padding-right: 50px;
                        padding-top: 10%;
                        padding-bottom: 5%;
                    }

                    /* =========mobile screen====== */
                    @media screen and (max-width: 479px) {
                        .footer-container {
                            padding-left: 10px;
                            padding-right: 10px;
                        }
                    }
                `}
            </style>
    </div>
  )
}
