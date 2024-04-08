import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading';
import CBOOverview from './Overview';

function CBOBody({ activeMenuItem, user }) {

  return (
    <div className='dash-body'>
      {user !== null ? (
        <div className='dashboard-data dashboard-top'>
            <i className="bi bi-person-check"></i>
            <div className='dashboard-top-content'>
            <h1>{user?.contactPersonName}</h1>
            <h3>{user?.email}</h3>
            <h5 className='txt'>Role - {user?.Role}</h5>
            </div>
        </div>
      ) : (
        <div className='dashboard-data'>
          <PlaceholderLoading shape='rect' width={"100%"} height={"20em"} />
          {/* <PlaceholderLoading shape='rect' width={"100%"} height={"50%"} /> */}
        </div>
      )}
      {activeMenuItem === 'overview' && 
      <div className='overview'>
            <CBOOverview />
        </div>
    }
      {activeMenuItem === 'profile' && <div>Profile Content</div>}
      {/* Add conditions for other menu items */}
    </div>
  );
}

export default CBOBody;