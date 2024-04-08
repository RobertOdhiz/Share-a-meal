import React, { useState } from 'react';
import { handleLogin, handleSendPasswordResetEmail } from './Semi-Components/utils';
import './Forms.css';
import { Link, useNavigate } from 'react-router-dom';
import { delay } from '../../Dashboards/utils';

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
  const navigate = useNavigate();

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
        delay(1000);
        navigate('/dashboard')
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
        {isForgotPasswordMode ? (
          <div className='form-component'>
            <div className='form-fields' style={{gap: ".5em"}}>
              <h5 className="txt">Enter Your Email Address</h5>
            <input
              name='resetEmail'
              type='email'
              placeholder='Email Address'
              value={formData.resetEmail}
              onChange={handleInputChange}
              required
            />
            </div>
            <button disabled={isLoading || !formData.resetEmail} className='btn'>
              {isLoading ? 'Sending Reset Email...' : 'Reset Password'}
            </button>
            <p onClick={toggleForgotPasswordMode}
            style={{cursor: "pointer", textDecoration: "underline"}}
            >
              Back to Login
              </p>
          </div>
        ) : (
          <div className='form-component'>
            <h2>Login</h2>
            <div className='form-fields' style={{gap: ".5em"}}>
              <h5 className='txt'>Email</h5>
            <input
              name='email'
              type='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className='form-fields' style={{gap: ".5em"}}>
              <h5 className="txt">Password</h5>
              <input
                name='password'
                type={isPasswordShown ? 'text' : 'password'}
                placeholder='Password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <p onClick={() => setisPasswordShown(!isPasswordShown)}
              style={{cursor: "pointer", textDecoration: "underline"}}>
                {isPasswordShown ? 'Hide Password' : 'Show Password'}
              </p>
            </div>
            </div>
            <button
              disabled={isLoading || !formData.email || !formData.password}
              className='btn'
            >
              {isLoading ? 'Logging You in...' : 'Login'}
            </button>
            <p onClick={toggleForgotPasswordMode} className='link'>Forgot Password?</p>
            <p>Or Register with Us Today. <Link to='/register' className='link'>Sign Up</Link></p>
          </div>
        )}
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Login;
