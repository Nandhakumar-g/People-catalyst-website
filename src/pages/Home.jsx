import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Briefcase } from 'lucide-react';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(ease * end));

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const Home = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const heroClass = (extra) => `animate-item ${extra} ${heroVisible ? 'hero-active' : ''}`;

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="hero-content">
            <h1 className={`${heroClass('fade-up')} hero-title text-primary`}>
              People Development, Done Right.
            </h1>
            <h2 className={`${heroClass('fade-up delay-100')} hero-subline`}>
              Clarity, behaviour, and communication across education and careers.
            </h2>
            <div className={`${heroClass('fade-up delay-200')} hero-cta-group`}>
              <a
                href="https://wa.me/919940020511"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Let’s Chat <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </a>
            </div>
            <div className={`${heroClass('fade-up delay-300')} mt-4`}>
              <Link to="/programs" className="secondary-link">Explore Our Programs</Link>
            </div>
            {/* Hero Visual - Abstract & Premium */}
            <div className={`${heroClass('scale-in delay-400')} hero-visual-container mt-12 flex justify-center`}>
              <div className="relative w-full max-w-4xl mx-auto" style={{ minHeight: '300px' }}>
                <svg
                  viewBox="0 0 800 400"
                  className="w-full h-auto drop-shadow-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ maxHeight: '450px' }}
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.15" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--action))" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Abstract Background Shapes - Intense */}
                  <circle cx="400" cy="200" r="180" fill="url(#grad1)" className="animate-float-intense" style={{ transformOrigin: 'center' }} />
                  <path
                    d="M 200 200 Q 400 50 600 200 T 1000 200"
                    fill="none"
                    stroke="url(#grad2)"
                    strokeWidth="2"
                    opacity="0.5"
                    className="animate-pulse-glow"
                  />
                  <circle cx="600" cy="100" r="40" fill="hsl(var(--secondary))" fillOpacity="0.1" className="animate-float-intense" style={{ animationDelay: '1s' }} />
                  <circle cx="200" cy="300" r="60" fill="hsl(var(--action))" fillOpacity="0.05" className="animate-float-intense" style={{ animationDelay: '2s' }} />

                  {/* Modern Geometric Accent */}
                  <rect x="350" y="150" width="100" height="100" rx="20"
                    fill="none" stroke="hsl(var(--text-muted))" strokeWidth="1" strokeOpacity="0.2"
                    transform="rotate(45 400 200)"
                    className="animate-spin-slow"
                    style={{ transformOrigin: '400px 200px' }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      < section className="section bg-surface text-center reveal" >
        <div className="container">
          <h2 className="section-title animate-item fade-up">Who We Are</h2>
          <p className="section-copy animate-item fade-up delay-100">
            The People Catalyst is a people development vision addressing behavioural gaps, clarity, and communication to empower students, professionals, and organizations.
          </p>
          <div className="animate-item fade-up delay-200">
            <Link to="/about" className="btn btn-secondary mt-6">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section >

      {/* CORE OFFERINGS SNAPSHOT */}
      <section className="section bg-alt reveal">
        <div className="container text-center">
          <h2 className="section-title mb-8 animate-item fade-up">What We Do</h2>
          <div className="offerings-grid">
            <div className="offering-card animate-item scale-in delay-100 hover-lift">
              <h3>Career Clarity & Readiness Programs</h3>
            </div>
            <div className="offering-card animate-item scale-in delay-200 hover-lift">
              <h3>LinkedIn Presence Lab</h3>
            </div>
            <div className="offering-card animate-item scale-in delay-300 hover-lift">
              <h3>Catalyst Core</h3>
            </div>
          </div>
          <div className="mt-8 animate-item fade-up delay-400">
            <Link to="/programs" className="btn btn-primary">
              See All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH SNAPSHOT */}
      <section className="section bg-surface reveal">
        <div className="container text-center">
          <h2 className="section-title mb-12 animate-item fade-up">How We Work</h2>

          <div className="process-flow-container animate-item scale-in delay-200">
            {/* Connecting Line Background */}
            <div className="process-line-track"></div>
            <div className="process-line-active"></div>

            {['People-first, not content-first', 'Clarity before capability', 'Behavioural depth', 'Contextual learning'].map((text, index) => (
              <div key={index} className="process-step-wrapper" style={{ animationDelay: `${index * 400 + 400}ms` }}>
                <div className="process-step hover-lift">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">{text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 animate-item fade-up delay-500">
            <Link to="/approach" className="btn btn-secondary">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* STATS + CLIENT LOGOS */}
      <section className="section bg-alt reveal text-center">
        <div className="container">
          <h2 className="section-title mb-12 animate-item fade-up">Our Impact So Far</h2>
          <div className="stats-grid">
            <div className="stat-card animate-item scale-in delay-100">
              <Briefcase size={40} className="stat-icon" />
              <div className="stat-number animate-pulse-glow"><CountUp end={5} duration={1500} /></div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card animate-item scale-in delay-200">
              <Users size={40} className="stat-icon" />
              <div className="stat-number animate-pulse-glow"><CountUp end={671} duration={2000} /></div>
              <div className="stat-label">Individuals Impacted</div>
            </div>
            <div className="stat-card animate-item scale-in delay-300">
              <Clock size={40} className="stat-icon" />
              <div className="stat-number animate-pulse-glow"><CountUp end={60} duration={1500} /></div>
              <div className="stat-label">Man Hours Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section bg-surface text-center reveal">
        <div className="container">
          <h2 className="section-title mb-8 animate-item fade-up">Our Partners & Collaborators</h2>
          <div className="partners-carousel-placeholder animate-item scale-in delay-100">
            <div className="carousel-track"> */}
      {/* Placeholder Logos */}
      {/* <div className="partner-logo">LOGO 1</div>
              <div className="partner-logo">LOGO 2</div>
              <div className="partner-logo">LOGO 3</div>
              <div className="partner-logo">LOGO 4</div>
              <div className="partner-logo">LOGO 5</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER CTA */}
      <section className="section bg-alt text-center footer-cta-section reveal">
        <div className="container">
          <h2 className="cta-line mb-6 animate-item fade-up">Let’s start a conversation! Just a message away.</h2>
          <div className="button-group animate-item fade-up delay-100">
            <a
              href="https://wa.me/919940020511"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 4rem 0 2rem;
          background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--primary) / 0.08) 100%);
        }
        .hero-title {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .hero-subline {
          font-size: 1.25rem;
          color: hsl(var(--text-muted));
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .section-copy {
          font-size: 1.15rem;
          max-width: 700px;
          margin: 0 auto;
          color: hsl(var(--text-muted));
          line-height: 1.7;
        }
        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .offering-card {
          background: hsl(var(--surface));
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid hsl(var(--border));
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: default;
        }
        .offering-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          border-color: hsl(var(--primary) / 0.3);
        }
        .offering-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: hsl(var(--text-main));
        }

        .stats-grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .stat-card {
          text-align: center;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: hsl(var(--primary));
          line-height: 1;
          margin: 0.5rem 0;
        }
        .stat-label {
          color: hsl(var(--text-muted));
          font-weight: 500;
        }
        .partners-carousel-placeholder {
          background: hsl(var(--background));
          padding: 2rem;
          border-radius: 1rem;
          overflow: hidden;
        }
        .carousel-track {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          opacity: 0.5;
          flex-wrap: wrap; 
        }
        .partner-logo {
          font-weight: 700;
          color: hsl(var(--text-muted));
        }
        .footer-cta-section {
          padding-bottom: 6rem;
        }
        .cta-line {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .secondary-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.25rem; }
          .stats-grid { flex-direction: column; gap: 3rem; }
        }

        /* Abstract Visual Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out 1s infinite; }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div >
  );
};

export default Home;
