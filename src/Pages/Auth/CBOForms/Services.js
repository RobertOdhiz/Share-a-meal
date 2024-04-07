import React from 'react';

function Services({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Services Provided</h1>
            <div className='form-fields'>
                <h5 className='txt'>Describe the services you offer</h5>
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
