import React, { useState } from 'react';
import CBORegistration from './Semi-Components/CBOReg';
import PartnerRegistration from './Semi-Components/PartnerReg';

function Registration() {
    const [userType, setUserType] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div>
            <div className={`${!userType ? '' : 'selection'}`} >
                <label>
                    <input
                        type='radio'
                        value='CBO'
                        checked={userType === 'CBO'}
                        onChange={handleUserTypeChange}
                    />
                    CBO
                </label>
                <label>
                    <input
                        type='radio'
                        value='Partner'
                        checked={userType === 'Partner'}
                        onChange={handleUserTypeChange}
                    />
                    Partner
                </label>
            </div>
            {userType && userType === 'CBO' &&
                <CBORegistration />
            }
            {userType && userType === 'Partner' &&
                <PartnerRegistration />
            }
        </div>
    );
}

export default Registration;
