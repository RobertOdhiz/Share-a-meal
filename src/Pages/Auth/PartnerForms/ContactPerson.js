import React from 'react';

const PartnerContactPerson = ({ formData, handleChange }) => {
  return (
    <div>
      <h1>Contact Person Details</h1>
      <input
        name='contactPersonName'
        type='text'
        placeholder='Contact Person Name'
        value={formData.contactPersonName}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      <input
        name='position'
        type='text'
        placeholder='Position'
        value={formData.position}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      <input
        name='email'
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      <input
        name='phone'
        type='text'
        placeholder='Phone'
        value={formData.phone}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
    </div>
  );
};

export default PartnerContactPerson;
