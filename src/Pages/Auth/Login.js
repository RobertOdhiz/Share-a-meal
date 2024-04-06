import React, { useState } from 'react';
import { handleLogin, handleSendPasswordResetEmail } from './Semi-Components/utils';
import './Forms.css';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    resetEmail: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isPasswordShown, setisPasswordShown] = useState(false);
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLoginsubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isForgotPasswordMode) {
        await handleSendPasswordResetEmail(formData.resetEmail);
        setSuccessMessage('Password reset email sent successfully!');
      } else {
        const message = await handleLogin(formData);
        setSuccessMessage(message);
      }
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForgotPasswordMode = () => {
    setIsForgotPasswordMode(!isForgotPasswordMode);
    setFormData({ email: '', password: '', resetEmail: '' });
  };

  return (
    <div>
      <form className='form-container' onSubmit={handleLoginsubmit}>
      <h1>Login</h1>
        {isForgotPasswordMode ? (
          <div>
            <input
              name='resetEmail'
              type='email'
              placeholder='Email Address'
              value={formData.resetEmail}
              onChange={handleInputChange}
              required
            />
            <button disabled={isLoading || !formData.resetEmail}>
              {isLoading ? 'Sending Reset Email...' : 'Reset Password'}
            </button>
            <p onClick={toggleForgotPasswordMode}>Back to Login</p>
          </div>
        ) : (
          <div>
            <input
              name='email'
              type='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div>
              <input
                name='password'
                type={isPasswordShown ? 'text' : 'password'}
                placeholder='Password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <p onClick={() => setisPasswordShown(!isPasswordShown)}>
                {isPasswordShown ? 'Hide' : 'Show'}
              </p>
            </div>
            <button
              disabled={isLoading || !formData.email || !formData.password}
            >
              {isLoading ? 'Logging You in...' : 'Login'}
            </button>
            <p onClick={toggleForgotPasswordMode} className='link'>Forgot Password?</p>
          </div>
        )}
        <p>Or Register with Us Today. <Link to='/register' className='link'>Sign Up</Link></p>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Login;
