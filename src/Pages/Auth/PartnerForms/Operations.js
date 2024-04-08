import React, { useState } from 'react';
import './../../css/styles.css';

const Operations = ({ formData, handleChange }) => {
  const [weekdayHours, setWeekdayHours] = useState('');
  const [weekendHours, setWeekendHours] = useState('');

  const handleAddWeekdayHours = () => {
    if (weekdayHours.trim() !== '') {
      handleChange({ target: { name: 'weekdayHours', value: [...formData.weekdayHours, weekdayHours] } }, 'Partner');
      setWeekdayHours('');
    }
  };

  const handleAddWeekendHours = () => {
    if (weekendHours.trim() !== '') {
      handleChange({ target: { name: 'weekendHours', value: [...formData.weekendHours, weekendHours] } }, 'Partner');
      setWeekendHours('');
    }
  };

  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Operations</h1>
      <div className='form-fields' id='fields'>
        <div>
          <h5 className='txt'>Weekdays</h5>
          <input
            type='text'
            placeholder='Enter hours (e.g., 9:00 AM - 5:00 PM)'
            value={weekdayHours}
            onChange={(e) => setWeekdayHours(e.target.value)}
          />
          <button onClick={handleAddWeekdayHours} className='btn-add'>
            Add
          </button>
          <ul>
            {formData.weekdayHours && formData.weekdayHours.map((hours, index) => (
              <li key={index}>{hours}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className='txt'>Weekends</h5>
          <input
            type='text'
            placeholder='Enter hours (e.g., 9:00 AM - 5:00 PM)'
            value={weekendHours}
            onChange={(e) => setWeekendHours(e.target.value)}
          />
          <button onClick={handleAddWeekendHours} className='btn-add'>
            Add
          </button>
          <ul>
            {formData.weekendHours && formData.weekendHours.map((hours, index) => (
              <li key={index}>{hours}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Operations;
