import React from 'react';
import '../../css/Region.css'

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
                </div>
                <h5 className='quiz'>Do you have your means of transporting goods?</h5>
                <div className='choose'>
                    <label>
                        <input
                            type='radio'
                            name='transportationAvailability'
                            value='Yes'
                            checked={formData.transportationAvailability === 'Yes'}
                            onChange={(e) => handleChange(e, 'CBO')}
                            required
                            style={{fontSize: '20px', marginTop:"30px"}}

                        />Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='transportationAvailability'
                            value='No'
                            checked={formData.transportationAvailability === 'No'}
                            onChange={(e) => handleChange(e, 'CBO')}
                            required
                            style={{fontSize: '10px', marginTop:"30px"}}
                        /> No
                    </label>
                </div>
            </div>
    );
}

export default GeographicLocation;
