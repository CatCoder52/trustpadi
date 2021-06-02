import React from 'react';
import {FaEdit} from 'react-icons/fa';

export default function DashboardRight() {
    return (
        <div>
            <div className="card side-bar-card border-0">
                <div className="card-body side-card-body">
                    <div className="row">
                        <div className="col-2">
                            <div className="">
                                <img
                                    style={{height: '30px', width: '30px'}}
                                    src="https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                                    alt="avater"
                                />
                            </div>
                        </div>
                        <div className="col-8 ">
                            <div className="">
                                <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>Ibe Andyson</p>
                                <p style={{fontSize: '0.6em', color: '#aaaaaa' , marginTop: "-20px"}}>Lagos Nigeria</p>
                            </div>
                        </div>
                        <div className="col-2 " style={{marginLeft: "-20px"}}>
                            <div className="">
                                <FaEdit style={{fontSize: "0.9em", color: '#aaaaaa'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                 .side-bar-card {
                    margin-top: 5%;
                    height: 100vh;
                    border-radius: 0%;
                    position: fixed;
                    background-color: #ffffff;
                }
                .side-card-body {
                    margin-top: 30%;
                    margin-bottom: 10%;
                 
                }
                `}
            </style>
        </div>
    );
}
