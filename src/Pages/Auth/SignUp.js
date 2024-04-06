import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = () => {
        if (userType === 'CBO') {
            navigate(`/register/CBO`);
        } else if (userType === 'Partner') {
            navigate(`/register/Partner`);
        }
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
            <button onClick={handleSubmit}>Continue</button>
        </div>
    );
}

export default Registration;
