import React from 'react';

const PreviousExperience = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Previous Experience</h1>
      <div className='form-fields' id='fields'>
        <h5 className='txt'>Describe any Previous Experience in Donation</h5>
      <textarea
        name='previousExperience'
        type='text'
        placeholder='Previous Experience'
        value={formData.previousExperience}
        onChange={(e) => handleChange(e, 'Partner')}
        required></textarea>
      </div>
    </div>
  );
};

export default PreviousExperience;
