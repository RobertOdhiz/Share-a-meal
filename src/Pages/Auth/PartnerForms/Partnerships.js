import React from 'react';

const Partnerships = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Partnerships</h1>
      <textarea
        name='partnerships'
        placeholder='Describe your partnerships(optional)'
        value={formData.partnerships}
        onChange={(e) => handleChange(e, 'Partner')}
      />
    </div>
  );
};

export default Partnerships;
