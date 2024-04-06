import React from 'react'

function Organization({ formData, handleChange }) {
  return (
    <div className='form-component'>
    <h1 className='form-sec-title'>Organization Information</h1>
    <div className='form-fields'>
        <input
            name='cboName'
            type='text'
            placeholder='CBO Name'
            value={formData.cboName}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='legalStatus'
            type='text'
            placeholder='Legal Status'
            value={formData.legalStatus}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='registrationNumber'
            type='text'
            placeholder='Registration Number'
            value={formData.registrationNumber}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
        <input
            name='yearEstablished'
            type='text'
            placeholder='Year Established'
            value={formData.yearEstablished}
            onChange={(e) => handleChange(e, 'CBO')}
            required
        />
    </div>
    </div>
  )
}

export default Organization