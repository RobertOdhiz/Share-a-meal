import React from 'react';
import '../../css/Documentation.css'

function Documentation({ formData, handleChange }) {
    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Documentation</h1>
            <div className='form-fields'>
                <input
                    name='documents'
                    type='file'
                    multiple
                    onChange={(e) => handleChange(e, 'CBO')}
                    required
                />
            </div>
        </div>
    );
}

export default Documentation;
