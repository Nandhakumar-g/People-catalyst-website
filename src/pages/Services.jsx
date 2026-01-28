import React from 'react';
import { Lightbulb, Compass, Award, Users, Mic, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "LinkedIn Presence Lab",
      subtitle: "Visibility without credibility is noise.",
      desc: "LinkedIn Presence Lab helps you become visible, relevant, and trusted by decision-makers, without chasing virality.",
      icon: <Users size={32} />
    },
    {
      title: "Career Catalyst",
      subtitle: "Not shortcuts. Not generic advice.",
      desc: "Career Readiness Coaching is consistent, personalised mentoring designed for real-world professional success. (1:1 Mentoring)",
      icon: <Compass size={32} />
    },
    {
      title: "Career Roadmap Program",
      subtitle: "Your career deserves a strategy, not assumptions.",
      desc: "We build role-specific, market-backed roadmaps that tell you exactly what to learn, build, and prepare for.",
      icon: <Lightbulb size={32} />
    },
    {
      title: "Confident Lab",
      subtitle: "Confidence isn’t a trait. It’s a skill.",
      desc: "CONFIDENT helps students build self-belief, communication, and presence through practical, age-appropriate learning.",
      icon: <Mic size={32} />
    },
    {
      title: "Catalyst Core",
      subtitle: "Not louder leaders. Grounded individuals.",
      desc: "Catalyst Core builds the mindset, discipline, and clarity required to lead oneself before leading others.",
      icon: <Award size={32} />
    },
    {
      title: "Faculty Development Program",
      subtitle: "Not compliance. Real development.",
      desc: "A customised faculty program focused on communication, classroom presence, and reflective professional growth..",
      icon: <BookOpen size={32} />
    }
  ];

  return (
    <div className="services-page section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Real-world solutions for real-world growth.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <h4 className="service-subtitle">{service.subtitle}</h4>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: hsl(var(--surface));
          padding: 2.5rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid hsl(var(--border));
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: hsl(var(--primary));
        }
        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          background-color: hsl(var(--secondary) / 0.1);
          color: hsl(var(--secondary));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: hsl(var(--text-main));
        }
        .service-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: hsl(var(--secondary));
          margin-bottom: 1rem;
        }
        .service-desc {
          color: hsl(var(--text-muted));
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;
