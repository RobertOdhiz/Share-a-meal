import React from 'react';

function Partnerships({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Partnerships and Collaborations</h1>
            <div className='form-fields'>
                <h5 className='txt'>Describe any partnerships you Have</h5>
                <textarea
                    name='partnerships'
                    placeholder='Partnerships and Collaborations'
                    value={formData.partnerships}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                ></textarea>
            </div>
        </div>
    );
}

export default Partnerships;
