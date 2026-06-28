import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Check, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/payment.css';

export const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const service = location.state?.service || 'mantra';
  const plan = location.state?.plan || 'premium';

  const serviceInfo: any = {
    'mantra': { title: 'AI Mantra Recommendation', basic: 299, premium: 599, platinum: 999 },
    'yantra': { title: 'AI Yantra Recommendation', basic: 399, premium: 799, platinum: 1299 },
    'homa': { title: 'AI Homa Recommendation', basic: 499, premium: 999, platinum: 1599 },
    'ishta-devata': { title: 'Ishta Devata Recommendation', basic: 299, premium: 599, platinum: 999 },
    'charity-planner': { title: 'Charity Planner', basic: 199, premium: 399, platinum: 699 },
    'fasting-planner': { title: 'Fasting Planner', basic: 149, premium: 299, platinum: 499 },
    'vastu': { title: 'Interactive Vastu', basic: 399, premium: 799, platinum: 1399 },
    'muhurtham': { title: 'Muhurtham Generator', basic: 249, premium: 499, platinum: 799 },
  };

  const currentService = serviceInfo[service];
  const amount = currentService[plan as keyof typeof currentService];

  const [formData, setFormData] = useState({
    cardName: user?.name || '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: user?.email || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      setFormData(prev => ({ ...prev, [name]: value.replace(/\s/g, '').slice(0, 16) }));
    } else if (name === 'cvv') {
      setFormData(prev => ({ ...prev, [name]: value.slice(0, 3) }));
    } else if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').slice(0, 4);
      if (formatted.length >= 2) {
        setFormData(prev => ({ ...prev, [name]: formatted.slice(0, 2) + '/' + formatted.slice(2) }));
      } else {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  const handleConfirm = () => {
    navigate('/dashboard', { state: { message: 'Payment successful!' } });
  };

  if (step === 2) {
    return (
      <div className="payment-container">
        <div className="container">
          <div className="success-screen">
            <div className="success-icon">
              <Check size={64} />
            </div>
            <h1>Payment Successful!</h1>
            <p className="success-message">
              Your subscription to <strong>{currentService.title}</strong> has been activated.
            </p>

            <div className="order-details">
              <h2>Order Details</h2>
              <div className="detail-row">
                <span>Service</span>
                <span>{currentService.title}</span>
              </div>
              <div className="detail-row">
                <span>Plan</span>
                <span className="plan-badge">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
              </div>
              <div className="detail-row">
                <span>Amount Paid</span>
                <span className="amount">₹{amount}</span>
              </div>
              <div className="detail-row">
                <span>Transaction ID</span>
                <span className="trans-id">TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="detail-row">
                <span>Date</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            <div className="next-steps">
              <h2>Next Steps</h2>
              <ul>
                <li>
                  <span className="step-number">1</span>
                  <span>Check your email for access instructions</span>
                </li>
                <li>
                  <span className="step-number">2</span>
                  <span>Go to your Dashboard to access the service</span>
                </li>
                <li>
                  <span className="step-number">3</span>
                  <span>Download your personalized report</span>
                </li>
              </ul>
            </div>

            <div className="success-actions">
              <button className="btn-primary" onClick={handleConfirm}>
                Go to Dashboard
              </button>
              <button className="btn-secondary" onClick={() => navigate('/')}>
                Continue Shopping
              </button>
            </div>

            <p className="support-text">
              Need help? <a href="#">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container golden-bg">
      <div className="container">
        <div className="payment-content">
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-card">
              <div className="summary-item">
                <span className="label">Service</span>
                <span className="value">{currentService.title}</span>
              </div>
              <div className="summary-item">
                <span className="label">Plan Type</span>
                <span className="value">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</span>
              </div>
              <div className="summary-item">
                <span className="label">Price</span>
                <span className="value">₹{amount}</span>
              </div>
              <div className="summary-item">
                <span className="label">Tax (18%)</span>
                <span className="value">₹{Math.round(amount * 0.18)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item total">
                <span className="label">Total Amount</span>
                <span className="value">₹{Math.round(amount * 1.18)}</span>
              </div>
            </div>

            <div className="security-badge">
              <Lock size={16} />
              <span>Secure Payment</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="payment-form-section">
            <h2>Payment Details</h2>

            <form onSubmit={handlePayment} className="payment-form">
              <div className="form-group">
                <label className="form-label">Card Holder Name</label>
                <input
                  type="text"
                  name="cardName"
                  className="form-input"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="form-input"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber.replace(/(\d{4})/g, '$1 ').trim()}
                  onChange={handleInputChange}
                  maxLength={19}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    className="form-input"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    className="form-input"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="terms-check">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the Terms & Conditions and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary full-width"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <CreditCard size={18} />
                    Pay ₹{Math.round(amount * 1.18)}
                  </>
                )}
              </button>
            </form>

            <p className="payment-note">
              By clicking "Pay", you authorize this transaction. Your payment is processed securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
