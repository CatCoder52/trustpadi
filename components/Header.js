import React from 'react';
import Image from 'next/image';
import {ImMenu2} from 'react-icons/im';
import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <nav
                className="navbar fixed-top navbar-expand-lg "
                style={{backgroundColor: '#ffffff', boxShadow: '0 0 10px 0 #a2d0ff  '}}>
                <div className="navbar-brand ml-5 text-center d-none d-md-block d-lg-block">
                    <Link href="/">
                        <div>
                            <Image src="/logo.png" alt="logo" width={50} height={50} />
                            <p style={{fontSize: '0.7em', fontWeight: 'bold', color: '#210070', marginTop: '-10px'}}>
                                TrustPaddi
                            </p>
                        </div>
                    </Link>
                </div>
                {/* {{mobile}} */}
                <div className="navbar-brand  text-center d-lg-none d-md-none d-sm-block pt-3">
                    <Link href="/">
                        <div>
                            <Image src="/logo.png" alt="logo" width={35} height={35} />
                            <p style={{fontSize: '0.6em', fontWeight: 'bold', color: '#210070', marginTop: '-10px'}}>
                                TrustPaddi
                            </p>
                        </div>
                    </Link>
                </div>

                <ImMenu2
                    className="d-lg-none d-md-none d-sm-block"
                    style={{color: '#210070', fontSize: '40px'}}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" />
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active pt-2 ml-4">
                            <p className="nav-link my-link">Home</p>
                        </li>
                        <li className="nav-item  pt-2 ml-4">
                            <p className="nav-link  my-link">About Us</p>
                        </li>
                        <li className="nav-item  pt-2 ml-4">
                            <p className="nav-link my-link">FAQ</p>
                        </li>
                        <li className="nav-item  pt-2 ml-4">
                            <p className="nav-link my-link">Contact Us</p>
                        </li>
                        <li className="nav-item  pt-2 ml-4">
                            <p className="nav-link my-link">Pricing</p>
                        </li>
                    </ul>
                    <Link href="/sign_in">
                        <button className="btn  btn-md my-2 my-sm-0 btn1">Signin</button>
                    </Link>
                    <Link href="/sign_up">
                        <button className="btn  btn-md my-2 my-sm-0 ml-3 btn2">Signup</button>
                    </Link>
                </div>
            </nav>

            <style JSX>
                {`
                  .btn1{
                     filter: drop-shadow(0 0 10px #e7ba73) !important;
                     box-shadow: 0 0 10px 0 #e7ba73 !important;
                     color: #ffffff !important;
                     width: 100px !important;
                     font-weight: bold !important;
                     background-color: #f49f1c !important
                    }
                    .btn2{
                      filter: drop-shadow(0 0 10px #e4deec) !important;
                      box-shadow: 0 0 10px 0 #a2d0ff !important;
                      color: #ffffff !important;
                      width: 100px !important;
                      font-weight: bold !important;
                      background-color: #210070 !important
                     }
                     .my-link{
                       font-size: 0.9em !important;
                       color: #210070!important;
                       font-weight: bold !important;
                       cursor: pointer; 
                     }
                     .my-link:hover{
                      font-size: 0.9em !important;
                      color: #f49f1c!important;
                      font-weight: bold !important;
                      cursor: pointer;
                     }
                    
                `}
            </style>
        </div>
    );
}
