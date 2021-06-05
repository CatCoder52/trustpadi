import React from 'react';
import SideBar from '../components/SideBar';
import DashboardRight from '../components/DashboardRight';
import Overview from '../components/Overview';

export default function dashboard_overview() {
    return (
        <div className="body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3  d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-6 " >
                        <Overview />
                    </div>
                    <div className="col-3  d-none d-lg-block">
                        <DashboardRight />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .body {
                        margin: 0;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </div>
    );
}
