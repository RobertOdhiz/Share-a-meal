import React from 'react';

const PartnerContactPerson = ({ formData, handleChange }) => {
  return (
    <div className='form-component'>
      <h1 className='form-sec-title' >Contact Person Details</h1>
      <div className='form-fields' id='fields'>
        <h5 className='txt' >Name of Contact Person</h5>
      <input
        name='contactPersonName'
        type='text'
        placeholder='Contact Person Name'
        value={formData.contactPersonName}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
        {formData.contactPersonName && <h5 className='txt' >Position of {formData.contactPersonName}</h5>}
      <input
        name='position'
        type='text'
        placeholder='Position'
        value={formData.position}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
        {formData.contactPersonName && <h5 className='txt' >{formData.contactPersonName}'s Email address</h5>}
      <input
        name='email'
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
        {formData.contactPersonName && <h5 className='txt' >Phone Number of {formData.contactPersonName}</h5>}
      <input
        name='phone'
        type='text'
        placeholder='Phone'
        value={formData.phone}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      </div>
    </div>
  );
};

export default PartnerContactPerson;
