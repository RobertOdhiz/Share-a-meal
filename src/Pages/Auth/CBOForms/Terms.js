import React from 'react';
import '../../css/Terms.css';

function Terms({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Opt-in and Terms</h1>
            <div className='form-fields'>
                <div className="check">
                    <input
                        id="compliance-checkbox"
                        name='complianceConfirmation'
                        type='checkbox'
                        checked={formData.complianceConfirmation}
                        onChange={(e) => handleChange(e, 'CBO')}
                        className="custom-checkbox"
                        required
                    />
                    <label htmlFor="compliance-checkbox" className="checkbox-label">I confirm compliance with <a href="#" className="terms-link">Regulations</a>.</label>
                </div>
                <div className="check">
                    <input
                        id="terms-checkbox"
                        name='termsAgreement'
                        type='checkbox'
                        checked={formData.termsAgreement}
                        onChange={(e) => handleChange(e, 'CBO')}
                        className="custom-checkbox"
                        required
                    />
                    <label htmlFor="terms-checkbox" className="checkbox-label">I agree to the <a href="#" className="terms-link">terms and conditions</a>.</label>
                </div>
            </div>
        </div>
    );
}

export default Terms;
