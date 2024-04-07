import React from 'react';

const AdditionalComments = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Additional Comments</h1>
      <div className='form-fields' id='fields'>
      <textarea
        name='additionalComments'
        placeholder='Enter any additional comments here'
        value={formData.additionalComments}
        onChange={(e) => handleChange(e, 'Partner')}
      />
      </div>
    </div>
  );
};

export default AdditionalComments;
