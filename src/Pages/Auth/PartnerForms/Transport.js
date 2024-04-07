import React from 'react';

const TransportationAvailability = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Transportation Availability</h1>
      <div className='form-fields' id='fields'>
      <input
        name='transportationType'
        type='text'
        placeholder='Transportation Type'
        value={formData.transportationType}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      <input
        name='availability'
        type='text'
        placeholder='Availability'
        value={formData.availability}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      </div>
      
    </div>
  );
};

export default TransportationAvailability;
