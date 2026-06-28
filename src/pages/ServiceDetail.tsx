import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/service.css';

const serviceDetails = {
  'mantra': {
    title: 'AI Mantra Recommendation',
    description: 'Personalized mantras based on your astrological profile',
    fullDescription: 'Our AI-powered system analyzes your birth chart, planetary positions, and doshas to recommend the most powerful mantras for your spiritual journey. Each mantra is selected to harmonize your energies and bring positive transformation.',
    benefits: [
      'Personalized mantra selection',
      'Daily recitation guidance',
      'Benefits explanation and meanings',
      'Expert consultation available',
      'Audio pronunciation guide',
    ],
    pricing: {
      basic: { price: 299, name: 'Basic', features: ['1 Mantra', 'Email Support'] },
      premium: { price: 599, name: 'Premium', features: ['3 Mantras', 'Video Guidance', 'Phone Support', 'Monthly Updates'] },
      platinum: { price: 999, name: 'Platinum', features: ['Unlimited Mantras', '1-on-1 Consultation', 'Premium Support', 'Lifetime Access'] },
    },
  },
  'yantra': {
    title: 'AI Yantra Recommendation',
    description: 'Powerful yantras tailored to your spiritual journey',
    fullDescription: 'Yantras are sacred geometric diagrams with powerful spiritual significance. Our AI identifies the most beneficial yantras for your chart and guides you on proper installation, worship, and activation.',
    benefits: [
      'Yantra selection and diagnosis',
      'Installation guidance',
      'Daily worship procedures',
      'Authentic materials sourcing',
      'Progress tracking',
    ],
    pricing: {
      basic: { price: 399, name: 'Basic', features: ['1 Yantra', 'Email Support'] },
      premium: { price: 799, name: 'Premium', features: ['2 Yantras', 'Installation Guide', 'Phone Support', 'Updates'] },
      platinum: { price: 1299, name: 'Platinum', features: ['Unlimited Yantras', 'Expert Guidance', 'Premium Support', 'Lifetime Access'] },
    },
  },
  'homa': {
    title: 'AI Homa Recommendation',
    description: 'Auspicious fire rituals for your well-being',
    fullDescription: 'Fire rituals (homas) have been used for centuries to invoke divine blessings. Our experts recommend specific homas based on your needs and guide you through the entire process.',
    benefits: [
      'Homa selection and planning',
      'Auspicious timing calculation',
      'Ritual procedure guidance',
      'Materials and preparation',
      'Priest recommendations',
    ],
    pricing: {
      basic: { price: 499, name: 'Basic', features: ['Homa Consultation', 'Email Support'] },
      premium: { price: 999, name: 'Premium', features: ['3 Recommended Homas', 'Video Guidance', 'Phone Support'] },
      platinum: { price: 1599, name: 'Platinum', features: ['Priest Coordination', 'Full Execution', 'Expert Support', 'Documentation'] },
    },
  },
  'ishta-devata': {
    title: 'Ishta Devata Recommendation',
    description: 'Connect with your celestial deity',
    fullDescription: 'Your Ishta Devata is your chosen deity with whom you have a spiritual connection. We identify your personal deity and provide guidance on worship practices and spiritual connection.',
    benefits: [
      'Deity identification',
      'Spiritual compatibility analysis',
      'Worship procedures',
      'Festival guidance',
      'Mantra and prayers',
    ],
    pricing: {
      basic: { price: 299, name: 'Basic', features: ['Deity Identification', 'Email Support'] },
      premium: { price: 599, name: 'Premium', features: ['Detailed Analysis', 'Worship Guide', 'Phone Support'] },
      platinum: { price: 999, name: 'Platinum', features: ['Full Spiritual Path', 'Expert Guidance', 'Monthly Sessions', 'Lifetime Support'] },
    },
  },
  'charity-planner': {
    title: 'Charity Planner',
    description: 'Plan meaningful donations aligned with your insights',
    fullDescription: 'Charity is a powerful way to balance karma and invite blessings. Our system recommends the best causes and timing for your donations based on your astrological profile.',
    benefits: [
      'Cause recommendations',
      'Optimal donation timing',
      'Charity impact tracking',
      'Tax benefit guidance',
      'Organization verification',
    ],
    pricing: {
      basic: { price: 199, name: 'Basic', features: ['Monthly Recommendations', 'Email Support'] },
      premium: { price: 399, name: 'Premium', features: ['Weekly Recommendations', 'Impact Tracking', 'Phone Support'] },
      platinum: { price: 699, name: 'Platinum', features: ['Personalized Plan', 'Expert Guidance', 'Full Tracking', 'Annual Review'] },
    },
  },
  'fasting-planner': {
    title: 'Fasting Planner',
    description: 'Optimize your spiritual practice',
    fullDescription: 'Fasting is a profound spiritual practice. Our AI calculates the most auspicious fasting days and provides guidance on practices that align with your chart.',
    benefits: [
      'Fasting day recommendations',
      'Type of fast guidance',
      'Health considerations',
      'Spiritual benefits',
      'Monthly calendar',
    ],
    pricing: {
      basic: { price: 149, name: 'Basic', features: ['Monthly Fasting Calendar', 'Email Support'] },
      premium: { price: 299, name: 'Premium', features: ['Personalized Plan', 'Health Guidelines', 'Phone Support'] },
      platinum: { price: 499, name: 'Platinum', features: ['Custom Program', 'Expert Guidance', 'Health Monitoring', 'Yearly Plan'] },
    },
  },
  'vastu': {
    title: 'Interactive Vastu',
    description: 'Transform your space with vastu principles',
    fullDescription: 'Vastu Shastra is the ancient science of spatial arrangement. Our interactive tool helps you optimize your living and working spaces for maximum positive energy.',
    benefits: [
      'Space assessment',
      'Personalized recommendations',
      'Furniture arrangement guide',
      'Color suggestions',
      'Element balancing',
    ],
    pricing: {
      basic: { price: 399, name: 'Basic', features: ['Single Room Analysis', 'Email Support'] },
      premium: { price: 799, name: 'Premium', features: ['Full Home/Office', 'Video Guidance', 'Phone Support'] },
      platinum: { price: 1399, name: 'Platinum', features: ['Complete Analysis', 'Implementation Support', 'Expert Consultation', 'Quarterly Reviews'] },
    },
  },
  'muhurtham': {
    title: 'Muhurtham Generator',
    description: 'Find the perfect auspicious time',
    fullDescription: 'Muhurtham is the selection of auspicious time for important events. Our generator calculates the perfect moments for weddings, business launches, and life events.',
    benefits: [
      'Auspicious time calculation',
      'Event-specific timing',
      'Multiple date options',
      'Ritual guidance',
      'Calendar export',
    ],
    pricing: {
      basic: { price: 249, name: 'Basic', features: ['1 Event Muhurtham', 'Email Support'] },
      premium: { price: 499, name: 'Premium', features: ['3 Events', 'Detailed Analysis', 'Phone Support'] },
      platinum: { price: 799, name: 'Platinum', features: ['Unlimited Events', 'Expert Guidance', 'Premium Support', 'Lifetime Access'] },
    },
  },
};

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | 'platinum'>('premium');

  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="container service-not-found">
        <h2>Service not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/payment', { state: { service: id, plan: selectedPlan } });
  };

  return (
    <div className="service-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} /> Back to Services
        </button>

        <div className="service-header">
          <h1>{service.title}</h1>
          <p className="service-breadcrumb">{service.description}</p>
        </div>

        <div className="service-content">
          <div className="service-description">
            <h2>About This Service</h2>
            <p>{service.fullDescription}</p>

            <div className="benefits-section">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={20} className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pricing-section">
            <h2>Choose Your Plan</h2>

            <div className="pricing-cards">
              {Object.entries(service.pricing).map(([key, plan]) => (
                <div
                  key={key}
                  className={`pricing-card ${selectedPlan === key ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(key as 'basic' | 'premium' | 'platinum')}
                >
                  {key === 'platinum' && <div className="badge-premium">Most Popular</div>}

                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">{plan.price}</span>
                  </div>
                  <p className="price-note">One-time payment</p>

                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn-select ${selectedPlan === key ? 'active' : ''}`}
                    onClick={() => setSelectedPlan(key as 'basic' | 'premium' | 'platinum')}
                  >
                    {selectedPlan === key ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>

            <button className="btn-primary btn-checkout" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          </div>
        </div>

        <div className="testimonials-section">
          <h2>Client Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"This service completely transformed my life. Highly recommended!"</p>
              <p className="author">- Sarah Johnson</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"Accurate and insightful. The guidance provided was invaluable."</p>
              <p className="author">- Raj Patel</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"Best decision I made. The entire experience was smooth and professional."</p>
              <p className="author">- Emily Chen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
