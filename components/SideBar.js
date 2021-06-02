import {FaCreditCard , FaCog} from 'react-icons/fa';
import {MdDashboard} from 'react-icons/md';
import {AiFillPrinter} from "react-icons/ai"
import {FiRefreshCcw} from "react-icons/fi"
import {HiCash} from "react-icons/hi"


const SideBar = () => {
    return (
        <div>
            <div className="card side-bar-card shadow border-0">
                <div className="side-card-body">
                <a href="/admin_dashboard/settings" >
                        <div className="side-link-container side-link-text">
                            <MdDashboard style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Overview</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/settings">
                        <div className="side-link-container side-link-text">
                            <FaCreditCard style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Transaction</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/settings">
                        <div className="side-link-container side-link-text">
                            <AiFillPrinter style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Withdrawals</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/settings">
                        <div className="side-link-container side-link-text">
                            <FiRefreshCcw style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Refund</span>
                        </div>
                    </a>
                    {/* <a href="/admin_dashboard/settings">
                        <div className="side-link-container side-link-text">
                            <HiCash style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Withdrawals</span>
                        </div>
                    </a> */}
                    <a href="/admin_dashboard/settings">
                        <div className="side-link-container side-link-text">
                            <FaCog style={{fontSize: '1em', marginRight: '10px'}} />
                            <span>Settings</span>
                        </div>
                    </a>
                </div>
            </div>

            <style jsx>
                {`
                    .side-bar-card {
                        margin-top: 8%;
                        height: 100vh;
                        border-radius: 0%;
                        position: fixed;
                        background-color: #ffffff;
                    }
                    .side-card-body {
                        margin-top: 30%;
                        margin-bottom: 10%;
                     
                    }
                    .side-link-container {
                        margin-bottom: 10px;
                        cursor: pointer;
                        margin-left: 30px;
                        text-align: start;
                        font-size: 0.7em;
                        font-weight: bold;
                        color: #aaaaaa;
                        background-color: #ffffff;
                        border-radius: 20px;
                        height: 50px;
                        align-items: center;
                        padding-bottom: 10px;
                        padding-top: 13px;
                        padding-left: 20px;
                        width: 200px
                    }
                    :hover.side-link-container {
                        background-color: #ecf0fc;
                        border-radius: 20px;
                        height: 50px;                 
                        color: #4169e2;
                    }
                    a {
                        text-decoration: none;
                    }
                `}
            </style>
        </div>
    );
};
export default SideBar;
