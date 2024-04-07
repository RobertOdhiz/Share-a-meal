import React, { useState } from 'react';

function Documentation({ formData, handleChange }) {
    const [addedFiles, setAddedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const updatedFiles = [...addedFiles, ...files];
        setAddedFiles(updatedFiles);
        handleChange({ target: { name: 'documents', files: updatedFiles } }, "Partner");
    };

    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Documentation</h1>
            <div className='form-fields'>
                <label htmlFor="dropzone-file" className='file-dropzone'>
                    <div className='file-content'>
                        <svg className='file-icon' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className='file-text'>Click to upload or drag and drop</p>
                        <p className='file-info'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className='hidden' onChange={handleFileChange} name="documents" />
                </label>
            </div>
            <div className='added-files'>
                <h5 className='txt'>Added Files:</h5>
                <ul>
                    {formData.documents.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Documentation;