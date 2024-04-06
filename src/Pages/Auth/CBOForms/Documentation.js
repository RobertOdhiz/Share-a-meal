import React from 'react';

function Documentation({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Documentation and Compliance</h1>
            <div className='form-fields'>
                <input
                    name='documents'
                    type='file'
                    multiple
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
                <label>
                    <input
                        name='complianceConfirmation'
                        type='checkbox'
                        checked={formData.complianceConfirmation}
                        onChange={(e) => handleChange(e, 'CBO')}
                        required
                    />
                    I confirm compliance with regulations.
                </label>
            </div>
        </div>
    );
}

export default Documentation;
