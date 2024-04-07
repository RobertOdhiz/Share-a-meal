import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

function Resources({ formData, handleChange }) {
    const [staffVolunteersList, setStaffVolunteersList] = useState(formData.staffVolunteers ? formData.staffVolunteers.split(',') : ['']);

    const handleAddStaffVolunteer = () => {
        setStaffVolunteersList([...staffVolunteersList, '']);
    };

    const handleRemoveStaffVolunteer = (index) => {
        if (staffVolunteersList.length > 1) {
            const updatedList = [...staffVolunteersList];
            updatedList.splice(index, 1);
            setStaffVolunteersList(updatedList);
            const updatedValue = updatedList.join(',');
            handleChange({ target: { name: 'staffVolunteers', value: updatedValue } }, 'CBO');
        }
    };

    const handleStaffVolunteerChange = (e, index) => {
        const updatedList = [...staffVolunteersList];
        updatedList[index] = e.target.value;
        setStaffVolunteersList(updatedList);
        const updatedValue = updatedList.join(',');
        handleChange({ target: { name: 'staffVolunteers', value: updatedValue } }, 'CBO');
    };

    return (
        <div className='form-component'>
            <h1 className='form-sec-title'>Capacity and Resources</h1>
            <div className='form-fields'>
            <h5 className='txt'>Add a list of Staff or Volunteers You have</h5>
                {staffVolunteersList.map((staffVolunteer, index) => (
                    <div key={index} className='staff-volunteer-input'>
                        <input
                            type='text'
                            placeholder='Staff/Volunteer'
                            value={staffVolunteer}
                            onChange={(e) => handleStaffVolunteerChange(e, index)}
                            required
                        />
                        {index > 0 && (
                            <BsDash className='remove-icon' onClick={() => handleRemoveStaffVolunteer(index)} />
                        )}
                    </div>
                ))}
                <BsPlus className='add-icon' onClick={handleAddStaffVolunteer} />
            </div>
        </div>
    );
}

export default Resources;
