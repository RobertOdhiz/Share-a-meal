import React from 'react';

const TermsAgreement = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Compliance & Terms Agreement</h1>
      <label>
        <input
          name='termsAgreement'
          type='checkbox'
          checked={formData.termsAgreement}
          onChange={(e) => handleChange(e, 'Partner')}
          required
        />
        I agree to comply with all terms and conditions.
      </label>
    </div>
  );
};

export default TermsAgreement;