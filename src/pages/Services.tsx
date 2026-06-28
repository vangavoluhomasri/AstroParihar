import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Heart, Book, Calendar, Home as HomeIcon, Gift, Zap } from 'lucide-react';
import '../styles/services.css';

export const Services: React.FC = () => {

  const services = [
    {
      id: 'mantra',
      title: 'AI Mantra Recommendation',
      description: 'Get personalized mantras based on your birth chart and astrological profile.',
      icon: Sparkles,
      color: 'gradient-1',
      price: 'From ₹299',
    },
    {
      id: 'yantra',
      title: 'AI Yantra Recommendation',
      description: 'Discover powerful yantras tailored to your spiritual journey.',
      icon: Book,
      color: 'gradient-2',
      price: 'From ₹399',
    },
    {
      id: 'homa',
      title: 'AI Homa Recommendation',
      description: 'Explore auspicious fire rituals and homas for your well-being.',
      icon: Heart,
      color: 'gradient-3',
      price: 'From ₹499',
    },
    {
      id: 'ishta-devata',
      title: 'Ishta Devata Recommendation',
      description: 'Connect with your celestial deity through personalized guidance.',
      icon: Zap,
      color: 'gradient-4',
      price: 'From ₹299',
    },
    {
      id: 'charity-planner',
      title: 'Charity Planner',
      description: 'Plan meaningful donations aligned with your astrological insights.',
      icon: Gift,
      color: 'gradient-5',
      price: 'From ₹199',
    },
    {
      id: 'fasting-planner',
      title: 'Fasting Planner',
      description: 'Optimize your spiritual practice with recommended fasting days.',
      icon: Calendar,
      color: 'gradient-6',
      price: 'From ₹149',
    },
    {
      id: 'vastu',
      title: 'Interactive Vastu',
      description: 'Transform your space with scientifically-backed vastu principles.',
      icon: HomeIcon,
      color: 'gradient-7',
      price: 'From ₹399',
    },
    {
      id: 'muhurtham',
      title: 'Muhurtham Generator',
      description: 'Find the perfect auspicious time for your important decisions.',
      icon: Calendar,
      color: 'gradient-8',
      price: 'From ₹249',
    },
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-header">
          <h1>All Services</h1>
          <p>Discover our comprehensive range of astrological services</p>
        </div>

        <div className="services-list-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className={`service-list-item ${service.color}`}
              >
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span className="price">{service.price}</span>
                  <div className="action">
                    <span>View Details</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
