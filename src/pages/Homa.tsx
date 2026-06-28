import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import '../styles/page.css';

export const Homa: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="page-hero homa-hero">
        <div className="page-copy">
          <span className="page-label">Sacred Fire Rituals</span>
          <h1>Homa Guidance for Health, Wealth & Peace</h1>
          <p>Discover auspicious homa recommendations curated with Vedic precision and AI insight, designed to restore balance and invite blessings.</p>
          <Link to="/service/homa" className="btn-primary">
            Book Homa Guidance
          </Link>
        </div>
        <div className="page-hero-card">
          <Flame size={36} />
          <h2>Homa at a Glance</h2>
          <p>Tailored fire rituals, precise muhurtham timing, and complete preparation guidance for your spiritual practice.</p>
        </div>
      </div>
    </div>
  );
};
