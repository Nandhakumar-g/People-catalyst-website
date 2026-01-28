import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Approach = () => {
    return (
        <div className="page-container">
            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h1 className="approach-title text-primary">Our Approach</h1>
                    <h2 className="section-subtitle">People-first, practical, and context-driven learning for meaningful outcomes.</h2>
                    <p className="intro-copy">
                        At The People Catalyst, we believe people development must be practical, personal, and context-driven. Every engagement begins with understanding the audience, environment, and real problem at hand.
                    </p>
                    <blockquote className="pull-quote">
                        “Learning is effective only when it is relevant, experiential, and people-centered.”
                    </blockquote>
                </div>
            </section>

            <section className="section bg-alt reveal">
                <div className="container">
                    <h3 className="section-header text-center mb-8">Guiding Principles</h3>
                    <div className="principles-grid">
                        <div className="principle-card animate-item scale-in hover-lift delay-100">
                            <CheckCircle className="principle-icon" size={32} />
                            <h4>People-first, not content-first</h4>
                        </div>
                        <div className="principle-card animate-item scale-in hover-lift delay-200">
                            <CheckCircle className="principle-icon" size={32} />
                            <h4>Clarity before capability</h4>
                        </div>
                        <div className="principle-card animate-item scale-in hover-lift delay-300">
                            <CheckCircle className="principle-icon" size={32} />
                            <h4>Behavioural depth</h4>
                        </div>
                        <div className="principle-card animate-item scale-in hover-lift delay-400">
                            <CheckCircle className="principle-icon" size={32} />
                            <h4>Contextual & experiential learning</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-surface reveal">
                <div className="container text-center">
                    <h3 className="section-header mb-8">How We Work</h3>
                    <div className="guided-process-container">
                        {['Diagnose gaps', 'Design learning', 'Deliver interventions', 'Measure impact'].map((step, index) => (
                            <div key={index} className="guided-step-wrapper">
                                <div className="guided-step" style={{ animationDelay: `${index * 300}ms` }}>
                                    <span className="step-text">{step}</span>
                                    {index < 3 && <div className="guided-connector">→</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-alt text-center reveal">
                <div className="container">
                    <a
                        href="https://wa.me/919940020511"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Let’s Chat <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </section>

            <style>{`
                .approach-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                .section-subtitle {
                    font-size: 1.25rem;
                    color: hsl(var(--text-main));
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                }
                .intro-copy {
                    max-width: 800px;
                    margin: 0 auto 2rem;
                    color: hsl(var(--text-muted));
                    font-size: 1.1rem;
                }
                .pull-quote {
                    font-size: 1.5rem;
                    font-style: italic;
                    color: hsl(var(--primary));
                    font-weight: 500;
                    margin: 2rem auto;
                    max-width: 700px;
                    border-left: 4px solid hsl(var(--action));
                    padding-left: 1.5rem;
                }
                .section-header {
                    font-size: 2rem;
                    font-weight: 700;
                    color: hsl(var(--text-main));
                    margin-bottom: 2rem;
                }
                .principles-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }
                .principle-card {
                    background: hsl(var(--surface));
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .principle-icon {
                    color: hsl(var(--secondary));
                    margin-bottom: 1rem;
                }
                .principle-card h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
};

export default Approach;
