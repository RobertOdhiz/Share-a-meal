import React from 'react';

const PreviousExperience = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Previous Experience</h1>
      <div className='form-fields' id='fields'>
      <input
        name='previousExperience'
        type='text'
        placeholder='Previous Experience'
        value={formData.previousExperience}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      </div>
    </div>
  );
};

export default PreviousExperience;
