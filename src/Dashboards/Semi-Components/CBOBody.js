import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils';
import PlaceholderLoading from 'react-placeholder-loading';

function CBOBody() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setUser(userData);
        console.log(user)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user !== null ? (
        <div className='dashboard-data'>
          {user.email}
        </div>
      ) : (
        <div className='dashboard-data'>
            <PlaceholderLoading shape='rect' width={"100%"} height={"50%"} />
            <PlaceholderLoading shape='rect' width={"100%"} height={"50%"} />
        </div>
      )}
      <div></div>
      <div></div>
    </div>
  );
}

export default CBOBody;
