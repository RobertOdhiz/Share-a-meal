import React from 'react';

function Extra({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Additional Information</h1>
            <div className='form-fields'>
                <textarea
                    name='additionalComments'
                    placeholder='Additional Comments(Optional)'
                    value={formData.additionalComments}
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                ></textarea>
            </div>
        </div>
    );
}

export default Extra;
