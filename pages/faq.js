import React from 'react';
import Head from 'next/head';
import {RiSendPlaneFill} from 'react-icons/ri';

export default function faq() {
    return (
        <div>
            <Head />

            <section className="faq" style={{marginTop: '13%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 my-3">
                            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                <a className="nav-link bg active pill" data-toggle="pill" href="#question-1">
                                    What is Escrow?
                                </a>

                                <a className="nav-link" data-toggle="pill" className="custom-nav-pills" href="#question-2">
                                    What is Escrow 2?
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 my-3">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="question-1" role="tabpanel">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus impedit
                                    quaerat sit, animi cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi
                                    repellendus ea quia est blanditiis. Dolore, <span>doloremque consequuntur! Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.</span> Nostrum temporibus impedit quaerat sit,
                                    animi cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi repellendus ea
                                    quia est blanditiis. Dolore, doloremque consequuntur! Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Nostrum temporibus impedit quaerat sit, animi
                                    cupiditate natus dolor, saepe, ipsa asperiores laudantium nisi repellendus ea quia
                                    est blanditiis. Dolore, doloremque consequuntur!
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
            .navbar .nav-link{
              color: black !important;
              padding: 5px 35px 3px 0 !important;
              font-weight: 600;
              transition: .3s ease-in-out;
          }
  
          .navbar .nav-link.active, .navbar .nav-link:hover {
              color: #4169E2 !important;
          }
  
          .navbar .nav-link.active::after {
              content: '';
              display: block;
              width: 20px;
              padding: 2px;
              border-bottom: 1px solid #4169E2;
          }
  
  
          section.faq{
              margin: 60px 0;
          }
          section.faq .nav .nav-link.active{
              background: #4169e21c 0% 0% no-repeat padding-box;
              border: none;
              border-radius: 10px;
              width: 100%;
              height: 104px;
              letter-spacing: 1px;
              color: #4169E2;
              opacity: 1;
              text-align: center;
              margin-bottom: 15px;
              padding: 40px 0px;
          }
  
          section.faq .nav .nav-link {
              border: 1px solid #555555;
              border-radius: 10px;
              width: 100%;
              height: 104px;
              letter-spacing: 1px;
              color: #555555;
              opacity: 0.5;
              text-align: center;
              margin-bottom: 15px;
              padding: 40px 0px;
          }
                `}
            </style>
        </div>
    );
}
