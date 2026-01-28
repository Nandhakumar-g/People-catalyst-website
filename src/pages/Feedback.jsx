import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

const Feedback = () => {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Engineering Student",
      quote: "The clarity I gained about my career path was invaluable. I feel much more confident now."
    },
    {
      name: "Priya M.",
      role: "HR Professional",
      quote: "The behavioural skills training helped our team communicate much more effectively."
    },
    {
      name: "Dr. Anjali K.",
      role: "College Professor",
      quote: "A refreshing approach to faculty development. Practical and engaging."
    }
  ];

  return (
    <div className="page-container">
      <section className="section bg-surface text-center">
        <div className="container">
          <h1 className="hero-title text-primary animate-on-load">What Our Clients Say</h1>
          <h2 className="section-subtitle animate-on-load delay-100">Stories of growth, clarity, and transformation.</h2>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card animate-on-load hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                <Quote size={32} className="quote-icon" />
                <p className="testimonial-quote">"{item.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <div className="animate-on-load">
            <a
              href="https://wa.me/919940020511"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Let’s Talk <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
                .hero-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                .section-subtitle {
                    font-size: 1.25rem;
                    color: hsl(var(--text-muted));
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .testimonial-card {
                    background: hsl(var(--surface));
                    padding: 2.5rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    position: relative;
                    border: 1px solid hsl(var(--border));
                }
                .quote-icon {
                    color: hsl(var(--primary));
                    opacity: 0.2;
                    margin-bottom: 1rem;
                }
                .testimonial-quote {
                    font-size: 1.15rem;
                    font-style: italic;
                    color: hsl(var(--text-main));
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                .testimonial-author {
                    border-top: 1px solid hsl(var(--border));
                    padding-top: 1rem;
                }
                .author-name {
                    font-weight: 700;
                    color: hsl(var(--text-main));
                }
                .author-role {
                    font-size: 0.9rem;
                    color: hsl(var(--text-muted));
                }
            `}</style>
    </div>
  );
};

export default Feedback;
