import React from 'react';

function Operations({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Operational Details</h1>
            <div className='form-fields'>
                <input
                    name='daysAndHours'
                    type='text'
                    placeholder='Days and Hours of Operation'
                    value={formData.daysAndHours}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <input
                    name='distributionFrequency'
                    type='text'
                    placeholder='Distribution Frequency'
                    value={formData.distributionFrequency}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <input
                    name='foodDonationRequirements'
                    type='text'
                    placeholder='Food Donation Requirements'
                    value={formData.foodDonationRequirements}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
            </div>
        </div>
    );
}

export default Operations;
