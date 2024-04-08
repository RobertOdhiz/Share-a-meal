import React, { useState } from 'react'
import { useFormState } from '../../../Components/forms/formutils';
import CompanyDetails from '../PartnerForms/CompanyDetails';
import PartnerContactPerson from '../PartnerForms/ContactPerson';
import Documentation from '../PartnerForms/Documentation';
import Operations from '../PartnerForms/Operations';
import PreviousExperience from '../PartnerForms/Experience';
import TransportationAvailability from '../PartnerForms/Transport';
import Partnerships from '../PartnerForms/Partnerships';
import OptInPreferences from '../PartnerForms/Preferences';
import AdditionalComments from '../PartnerForms/Extra';
import TermsAgreement from '../PartnerForms/Agreements';
import './../Forms.css';
import { Link } from 'react-router-dom';


function PartnerRegistration() {

  const [step, setStep] = useState(1);
  const { partnerFormData, handleChange, handleFileChange } = useFormState();
  

  const handlePrev = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
      setStep(prevStep => Math.min(prevStep + 1, 10));
  };

  const progressPercentage = (step - 1) * 10;

  return (
    <div>
      <div className='form-container'>
        {step === 1 &&
          <CompanyDetails formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 2 &&
          <PartnerContactPerson formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 3 &&
          <Documentation formData={partnerFormData} handleChange={handleFileChange} />
        }
        {step === 4 &&
          <Operations formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 5 &&
          <PreviousExperience formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 6 &&
          <TransportationAvailability formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 7 &&
          <Partnerships formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 8 &&
          <OptInPreferences formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 9 &&
          <AdditionalComments formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 10 &&
          <TermsAgreement formData={partnerFormData} handleChange={handleChange} />
        }
        <div className='buttons'>
          <button onClick={handlePrev}>Previous</button>
          {step < 10 && <button onClick={handleNext}>Next</button>}
          {step === 10 && 
          <Link to={{
            pathname: '/confirm-registration',
            state: { formData: partnerFormData}
          }}><button disabled={!partnerFormData.complianceConfirmation || !partnerFormData.termsAgreement}>Finish</button></Link> }
        </div>
      </div>
      <div style={{ width: `${progressPercentage}%`, height: ".25em", backgroundColor: "green" }}></div>
    </div>
  )
}

export default PartnerRegistration