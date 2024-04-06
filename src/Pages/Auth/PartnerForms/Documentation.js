import React from 'react';

const Documentation = ({ formData, handleChange }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleChange({ target: { name: 'documents', value: files } }, 'Partner');
  };

  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Relevant Documentation</h1>
      <input
        name='documents'
        type='file'
        multiple
        onChange={handleFileChange}
      />
      {formData.documents && formData.documents.length > 0 && (
        <ul>
          {formData.documents.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Documentation;
