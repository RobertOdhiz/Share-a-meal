import React from 'react';

function GeographicLocation({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Geographic Coverage</h1>
            <div className='form-fields'>
                <input
                    name='serviceArea'
                    type='text'
                    placeholder='Service Area'
                    value={formData.serviceArea}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <div>
                    <label>
                        <input
                            type='radio'
                            name='transportationAvailability'
                            value='Yes'
                            checked={formData.transportationAvailability === 'Yes'}
                            onChange={(e) => handleChange(e, 'CBO')}
                            required
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='transportationAvailability'
                            value='No'
                            checked={formData.transportationAvailability === 'No'}
                            onChange={(e) => handleChange(e, 'CBO')}
                            required
                        />
                        No
                    </label>
                </div>
            </div>
        </div>
    );
}

export default GeographicLocation;
