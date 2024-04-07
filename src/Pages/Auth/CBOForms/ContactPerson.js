import React from 'react';
import '../Forms.css'

function ContactPerson({ formData, handleChange }) {
  return (
    <div className='form-component'>
    <h1 className='form-sec-title'>Contact Details</h1>
    <div className='form-fields'>
        <input
            name='contactPersonName'
            type='text'
            placeholder='Contact Person Name'
            value={formData.contactPersonName}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='email'
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='phone'
            type='text'
            placeholder='Phone'
            value={formData.phone}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='mailingAddress'
            type='text'
            placeholder='Mailing Address'
            value={formData.mailingAddress}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
    </div>
    </div>
  )
};

export default ContactPerson;