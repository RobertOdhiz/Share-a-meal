import React from 'react';

function Operations({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Operational Details</h1>
            <div className='form-fields'>
                <h5 className='txt'>Add Operating Hours</h5>
                <input
                    name='daysAndHours'
                    type='text'
                    placeholder='Days and Hours of Operation'
                    value={formData.daysAndHours}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <h5 className='txt'>How frequently do you do distribution to families</h5>
                <input
                    name='distributionFrequency'
                    type='text'
                    placeholder='Distribution Frequency'
                    value={formData.distributionFrequency}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <h5 className='txt'>What Resources do you need to maximize donations</h5>
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
