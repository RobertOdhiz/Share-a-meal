import React from 'react';

const PreviousExperience = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Previous Experience</h1>
      <input
        name='previousExperience'
        type='text'
        placeholder='Previous Experience'
        value={formData.previousExperience}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
    </div>
  );
};

export default PreviousExperience;
