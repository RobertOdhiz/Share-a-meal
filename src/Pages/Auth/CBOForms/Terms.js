import React from 'react';

function Terms({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Opt-in and Terms</h1>
            <div className='form-fields'>
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
                <label>
                    <input
                        name='termsAgreement'
                        type='checkbox'
                        checked={formData.termsAgreement}
                        onChange={(e) => handleChange(e, 'CBO')}
                        required
                    />
                    I agree to the terms and conditions.
                </label>
            </div>
        </div>
    );
}

export default Terms;
