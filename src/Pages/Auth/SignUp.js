import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css'

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
        <div className='choose'>
            <div className='form-component'>
            <h1 className='form-sec-title'>Who are you signing up as?</h1>
            <div className={`${!userType ? '' : 'selection'}`}>
                 
            <div className='form-fields' id='fields'>

                    <label>
                        <input
                            type='radio'
                            value='CBO'
                            checked={userType === 'CBO'}
                            onChange={handleUserTypeChange}
                            // style={{fontSize : '35px'}}
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
                    <button onClick={handleSubmit}>Continue</button>

                    
        </div>
        </div>
                
            </div>


        </div>
    );
}

export default Registration;
