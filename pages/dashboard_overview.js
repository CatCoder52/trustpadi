import React from 'react';
import SideBar from '../components/SideBar';

export default function dashboard_overview() {
    return (
        <div className="body">
            <div className="row">
                <div className="container-fluid">
                    <div className="col-2  d-none d-lg-block">
                        <SideBar />
                    </div>
                    <div className="col-xs-12 col-lg-10" />
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
