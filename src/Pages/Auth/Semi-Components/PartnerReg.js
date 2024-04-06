import React, { useState } from 'react'
import { useFormState } from '../../../Components/forms/formutils';
import { handlePartnerReg } from './utils';
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


function PartnerRegistration() {

  const [step, setStep] = useState(1);
  const { partnerFormData, handleChange } = useFormState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrev = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
      setStep(prevStep => Math.min(prevStep + 1, 10));
  };

  const handleSubmitPartner = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const message = await handlePartnerReg(partnerFormData);
      setSuccessMessage(message);
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitPartner} className='form-container'>
        {step === 1 &&
          <CompanyDetails formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 2 &&
          <PartnerContactPerson formData={partnerFormData} handleChange={handleChange} />
        }
        {step === 3 &&
          <Documentation formData={partnerFormData} handleChange={handleChange} />
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
          {step < 10 ? <button onClick={handleNext} >Next</button> : <button type="submit" disabled={!partnerFormData.complianceConfirmation || !partnerFormData.termsAgreement || isLoading}>{isLoading ? 'Setting things up...' : 'Finish'}</button>}
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  )
}

export default PartnerRegistration