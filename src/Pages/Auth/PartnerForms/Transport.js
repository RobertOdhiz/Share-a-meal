import React from 'react';

const TransportationAvailability = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Transportation Availability</h1>
      <div className='form-fields' id='fields'>
        <h5 className='txt'>Do You have have any means of transportation(Leave Blank if None)</h5>
      <input
        name='availability'
        type='text'
        placeholder='Availability'
        value={formData.availability}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      {formData.availability &&
      <div className='form-fields'>
      <h5 className='txt'>What type of Transport do you have?</h5>
      <input
        name='transportationType'
        type='text'
        placeholder='Transportation Type'
        value={formData.transportationType}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      </div>
      }
      </div>
    </div>
  );
};

export default TransportationAvailability;
