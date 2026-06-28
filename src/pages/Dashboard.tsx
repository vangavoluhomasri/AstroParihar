import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, Download, MessageSquare, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/dashboard.css';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const mockPurchases = [
    { id: 1, service: 'AI Mantra Recommendation', plan: 'Premium', date: '2024-01-15', amount: 599, status: 'Completed' },
    { id: 2, service: 'Muhurtham Generator', plan: 'Basic', date: '2024-01-10', amount: 249, status: 'Completed' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user?.name}!</h1>
          <p>Manage your astrological services and account</p>
        </div>

        <div className="dashboard-grid">
          {/* User Profile Card */}
          <div className="dashboard-card profile-card">
            <div className="card-header">
              <User size={24} />
              <h2>Profile Information</h2>
            </div>
            <div className="profile-info">
              <div className="info-group">
                <label>Full Name</label>
                <p>{user?.name}</p>
              </div>
              <div className="info-group">
                <label>Email</label>
                <p>{user?.email}</p>
              </div>
              <div className="info-group">
                <label>Phone</label>
                <p>{user?.phone}</p>
              </div>
              <div className="info-group">
                <label>Birth Date</label>
                <p>{user?.birthDate}</p>
              </div>
              <div className="info-group">
                <label>Birth Time</label>
                <p>{user?.birthTime}</p>
              </div>
              <div className="info-group">
                <label>Birth Place</label>
                <p>{user?.birthPlace}</p>
              </div>
              <button className="btn-secondary" onClick={() => navigate('#edit-profile')}>
                Edit Profile
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="dashboard-card stats-card">
            <div className="stat-item">
              <Calendar size={32} />
              <div>
                <p className="stat-label">Total Services</p>
                <p className="stat-value">2</p>
              </div>
            </div>
            <div className="stat-item">
              <CreditCard size={32} />
              <div>
                <p className="stat-label">Total Spent</p>
                <p className="stat-value">₹848</p>
              </div>
            </div>
            <div className="stat-item">
              <Download size={32} />
              <div>
                <p className="stat-label">Downloads</p>
                <p className="stat-value">5</p>
              </div>
            </div>
            <div className="stat-item">
              <MessageSquare size={32} />
              <div>
                <p className="stat-label">Consultations</p>
                <p className="stat-value">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="dashboard-card">
          <div className="card-header">
            <CreditCard size={24} />
            <h2>Purchase History</h2>
          </div>
          <div className="table-responsive">
            <table className="purchases-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Plan</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mockPurchases.map(purchase => (
                  <tr key={purchase.id}>
                    <td>{purchase.service}</td>
                    <td>{purchase.plan}</td>
                    <td>{purchase.date}</td>
                    <td>₹{purchase.amount}</td>
                    <td><span className="status-badge completed">{purchase.status}</span></td>
                    <td>
                      <button className="action-btn">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Services */}
        <div className="dashboard-card">
          <div className="card-header">
            <MessageSquare size={24} />
            <h2>Your Active Services</h2>
          </div>
          <div className="services-list">
            <div className="service-item">
              <div className="service-info">
                <h3>AI Mantra Recommendation</h3>
                <p>Premium Plan • Expires in 30 days</p>
              </div>
              <button className="btn-primary btn-small">Access Service</button>
            </div>
            <div className="service-item">
              <div className="service-info">
                <h3>Muhurtham Generator</h3>
                <p>Basic Plan • Lifetime Access</p>
              </div>
              <button className="btn-primary btn-small">Access Service</button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <button className="action-card" onClick={() => navigate('/')}>
              <span>Explore More Services</span>
              <span className="arrow">→</span>
            </button>
            <button className="action-card" onClick={() => navigate('#consultations')}>
              <span>Book Consultation</span>
              <span className="arrow">→</span>
            </button>
            <button className="action-card" onClick={() => navigate('#settings')}>
              <span>Account Settings</span>
              <span className="arrow">→</span>
            </button>
            <button className="action-card" onClick={handleLogout}>
              <span>Logout</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
