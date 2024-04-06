import React from 'react';

const AdditionalComments = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Additional Comments</h1>
      <textarea
        name='additionalComments'
        placeholder='Enter any additional comments here'
        value={formData.additionalComments}
        onChange={(e) => handleChange(e, 'Partner')}
      />
    </div>
  );
};

export default AdditionalComments;
