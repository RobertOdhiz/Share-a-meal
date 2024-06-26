import React, { useState } from 'react';
import { useFormState } from '../../../Components/forms/formutils';
import Terms from '../CBOForms/Terms';
import Extra from '../CBOForms/Extra';
import Documentation from '../CBOForms/Documentation';
import Partnerships from '../CBOForms/Partnerships';
import Resources from '../CBOForms/Resources';
import Operations from '../CBOForms/Operations';
import Services from '../CBOForms/Services';
import GeographicLocation from '../CBOForms/Region';
import ContactPerson from '../CBOForms/ContactPerson';
import Organization from '../CBOForms/Organization';
import './../Forms.css'
import { Link } from 'react-router-dom'

function CBORegistration() {

    const { CBOFormData, handleChange, handleFileChange } = useFormState();
    const [step, setStep] = useState(1);

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
                    <Organization formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 2 &&
                    <ContactPerson formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 3 &&
                    <GeographicLocation formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 4 &&
                    <Services formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 5 &&
                    <Operations formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 6 &&
                    <Resources formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 7 &&
                    <Partnerships formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 8 &&
                    <Documentation formData={CBOFormData} handleChange={handleFileChange} />
                }

                {step === 9 &&
                    <Extra formData={CBOFormData} handleChange={handleChange} />
                }

                {step === 10 &&
                    <Terms formData={CBOFormData} handleChange={handleChange} />
                }
                <div className='buttons'>
                <button onClick={handlePrev}>Previous</button>
                {step < 10 && <button onClick={handleNext}>Next</button>}
                {step === 10 && 
                <Link to={{
                    pathname: '/confirm-registration',
                    state: { formData: CBOFormData}
                }}><button disabled={!CBOFormData.complianceConfirmation || !CBOFormData.termsAgreement}>Finish</button></Link>
                }
                </div>
                    <div style={{ width: `${progressPercentage}%`, height: ".25em", backgroundColor: "green" }}></div>
            </div>
        </div>
    )
};

export default CBORegistration;
