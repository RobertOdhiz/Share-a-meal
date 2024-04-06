import React from 'react';

function Services({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Services Provided</h1>
            <div className='form-fields'>
                <textarea
                    name='servicesDescription'
                    placeholder='Services Description'
                    value={formData.servicesDescription}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                ></textarea>
            </div>
        </div>
    );
}

export default Services;
