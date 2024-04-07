import React from 'react';

const OptInPreferences = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Opt-In Preferences</h1>
      <div className='form-fields' id='fields'>
      <input
        name='emailOptIn'
        type='checkbox'
        checked={formData.emailOptIn}
        onChange={(e) => handleChange(e, 'Partner')}
      />
      <label htmlFor='emailOptIn'>Receive email notifications</label>
      <br />
      <input
        name='smsOptIn'
        type='checkbox'
        checked={formData.smsOptIn}
        onChange={(e) => handleChange(e, 'Partner')}
      />
      <label htmlFor='smsOptIn'>Receive SMS notifications</label>
      <br />
      <input
        name='newsletterOptIn'
        type='checkbox'
        checked={formData.newsletterOptIn}
        onChange={(e) => handleChange(e, 'Partner')}
      />
      <label htmlFor='newsletterOptIn'>Subscribe to newsletter</label>
      </div>
      
    </div>
  );
};

export default OptInPreferences;
