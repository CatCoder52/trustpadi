import React from 'react';

export default function overview() {
    return (
        <div>
            <div className="overview-big d-none d-md-block d-lg-block" />
            <div className="overview-small d-lg-none d-md-none d-sm-block" />
            <section className="dashboard">
                <div className="card border-0 mb-4 rounded alert-success">
                    <div className="card-body py-5">
                        <h5 className="font-weight-bold mb-3 title">Current balance</h5>

                        <div className="row">
                            <div className="col-lg-7">
                                <p className="text-muted sub-title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti nisi nemo
                                    adipisc
                                </p>
                            </div>

                            <div className="col-lg-5">chart</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="text-dark amout">$50,000.00</h1>
                            </div>

                            <div className="col-lg-5">
                                <button className="btn btn-success w-100 py-3  btn-sm">See history</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 mb-4 rounded alert-primary">
                    <div className="card-body py-5 ">
                        <h5 className="font-weight-bold mb-3 title">Trust balance</h5>

                        <div className="row">
                            <div className="col-lg-7">
                                <p className="text-muted sub-title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti nisi nemo
                                    adipisc
                                </p>
                            </div>

                            <div className="col-lg-5">chart</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="text-dark amout">$50,000.00</h1>
                            </div>

                            <div className="col-lg-5">
                                <button className="btn btn-primary w-100 py-3  btn-sm">See history</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 mb-4 rounded alert-gold">
                    <div className="card-body py-5 ">
                        <h5 className="font-weight-bold mb-3 title">Withdrawal balance</h5>

                        <div className="row">
                            <div className="col-lg-7">
                                <p className="text-muted sub-title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti nisi nemo
                                    adipisc
                                </p>
                            </div>

                            <div className="col-lg-5">chart</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="text-dark amout">$50,000.00</h1>
                            </div>

                            <div className="col-lg-5">
                                <button className="btn btn-gold w-100 py-3 btn-sm">See history</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    section {
                        margin: 60px 0;
                    }
                    .overview-small {
                      margin-top: 50%;
                  }
                   .overview-big {
                      margin-top: 25%;
                  }

                    .rounded {
                        border-radius: 20px !important;
                    }
                    .alert-success {
                        background-color: #02bc781c !important;
                    }

                    .alert-primary {
                        background-color: #4169e223 !important;
                    }

                    .alert-success h5 {
                        color: #02bc77 !important;
                    }

                    .alert-gold {
                        background-color: #febb4f27 !important;
                    }
                    .alert-gold h5 {
                        color: #feba4f !important;
                    }
                  } 
                  .text-primary{
                      color: #210070 !important;
                  }
                  
                  .text-success{
                      color: #02BC77 !important;
                  }
          
                  .text-gold{
                      color: #f49f1c !important;
                  }
          
                  .btn, .form-control{
                      border-radius: 8px;
                      box-shadow: none !important;
                  }
          
                  .btn-primary{
                      background-color: #4468E2 !important;
                  }
                  .btn-primary:hover{
                      background-color: #4062d4 !important;
                  }
          
                  .btn-success{
                      background-color: #02BC77 !important;
                      border-color: #02BC77;
                  }
                  .btn-success:hover{
                      background-color: #05a369 !important;
                      border-color: #05a369 !important;
                  }
          
                  .btn-light{
                      background-color: #4169e227 !important;
                      color: #4169e288;
                  }
                  .btn-light:hover{   
                      background-color: #4169e238 !important;
                      color: #4169e29c;
                  }
          
                  .btn-gold{
                      background-color: #FEBA4F !important;
                      color: white;
                  }
                  .btn-gold:hover{   
                      background-color: #ebab43 !important;
                      color: white;
                  }          
                    .title {
                        font-size: 0.9em;
                        font-wight: bold;
                    }
                    .sub-title {
                        font-size: 0.7em;
                    }
                    .amout {
                        font-size: 1.6em;
                        font-wight: bold;
                    }
                `}
            </style>
        </div>
    );
}
