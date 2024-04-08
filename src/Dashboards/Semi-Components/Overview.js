import React from 'react';
import { useFetchUserDocuments } from '../utils';

function CBOOverview() {
    const requests = useFetchUserDocuments("Requests");
    const orders = useFetchUserDocuments("Orders");
    const pickups = useFetchUserDocuments("Pickups");
    
    return (
        <div className='overview-sec'>
            <div className='overview-card'>
                {/* <i className="bi bi-collection"></i> */}
                <p>Total Requests</p>
                <p className='numbers'>{requests?.length ? requests.length : "0"}</p>
            </div>
            <div className='overview-card'>
                {/* <i className="bi bi-collection"></i> */}
                <p>Total Orders</p>
                <p className='numbers'>{orders?.length ? orders.length : "0"}</p>
            </div>
            <div className='overview-card'>
                {/* <i className="bi bi-collection"></i> */}
                <p>Pickups</p>
                <p className='numbers'>{pickups?.length ? pickups.length : "0"}</p>
            </div>
        </div>
    );
}

export default CBOOverview;
