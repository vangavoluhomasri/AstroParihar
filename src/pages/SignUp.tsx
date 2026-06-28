import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        setError('Please fill in all fields');
        return;
      }
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      if (!formData.password || !formData.confirmPassword || !formData.birthDate || !formData.birthTime || !formData.birthPlace) {
        setError('Please fill in all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      try {
        signup(formData);
        navigate('/dashboard');
      } catch (err) {
        setError('Sign up failed. Please try again.');
      }
    }
  };

  return (
    <div className="auth-container golden-bg">
      <div className="auth-box">
        <div className="auth-header">
          <h1>Create Your Account</h1>
          <p>Join AstroParihar for personalized astrological guidance</p>
          <div className="step-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
          </div>
        </div>

        <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          {step === 1 ? (
            <>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary full-width">
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  className="form-input"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Birth Time</label>
                <input
                  type="time"
                  name="birthTime"
                  className="form-input"
                  value={formData.birthTime}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Birth Place</label>
                <input
                  type="text"
                  name="birthPlace"
                  className="form-input"
                  placeholder="City, Country"
                  value={formData.birthPlace}
                  onChange={handleChange}
                />
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="btn-secondary full-width"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn-primary full-width">
                  Create Account
                </button>
              </div>
            </>
          )}
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
        </div>
      </div>
    </div>
  );
};
