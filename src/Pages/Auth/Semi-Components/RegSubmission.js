import React, { useState } from 'react'
import { handleCBOReg, handlePartnerReg } from './utils';
import { Link, useLocation } from 'react-router-dom';

function RegSubmission() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const { formData } = location.state || {};

    const handleSubmitPartner = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const message = await handlePartnerReg(formData);
          setSuccessMessage(message);
        } catch (error) {
          setErrorMessage(error.message || 'An error occurred during registration.');
        } finally {
          setIsLoading(false);
        }
      };

      const handleSubmitCBO = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const message = await handleCBOReg(formData);
          setSuccessMessage(message);
        } catch (error) {
          setErrorMessage(error.message || 'An error occurred during registration.');
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div>
        <form onSubmit={formData?.Role === "CBO" ? handleSubmitCBO : handleSubmitPartner} className='form-container'>
            <h1 className='txt'>Confirm Submission as {formData?.Role}</h1>
            <p>Head Back <Link to='/'>Home</Link></p>
        <button type="submit" disabled={isLoading} className='btn'>{isLoading ? 'Setting things up...' : 'Finish'}</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    </div>
  )
}

export default RegSubmission