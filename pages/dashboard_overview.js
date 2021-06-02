import React from 'react';
import SideBar from '../components/SideBar';
import DashboardRight from '../components/DashboardRight';

export default function dashboard_overview() {
    return (
        <div className="body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2  d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-xs-12 col-lg-8">
                        <h1>HI</h1>
                        </div>
                    <div className="col-2  d-none d-lg-block">
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
