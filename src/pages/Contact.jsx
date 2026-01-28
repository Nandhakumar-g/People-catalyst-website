import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-container">
            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h1 className="hero-title text-primary animate-item fade-up" style={{ opacity: 1, transform: 'none' }}>Let’s Talk</h1>
                    <h2 className="section-subtitle animate-item fade-up" style={{ opacity: 1, transform: 'none', transitionDelay: '100ms' }}>Whether you’re a student, educator, institution, or organization, a short conversation is often the best place to begin.</h2>
                </div>
            </section>

            <section className="section bg-alt text-center reveal">
                <div className="container">
                    <div className="animate-item scale-in">
                        <a
                            href="https://wa.me/919940020511"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
                        >
                            <MessageCircle size={24} style={{ marginRight: '8px' }} />
                            Chat on WhatsApp
                        </a>
                    </div>




                    <p className="reinforcement-line mt-6 animate-item fade-up delay-200" style={{ maxWidth: '600px', margin: '3rem auto 0' }}>
                        “No pressure—just a conversation to understand your needs.”
                    </p>
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
                    max-width: 700px;
                    margin: 0 auto 1.5rem;
                    font-weight: 500;
                }
                .reinforcement-line {
                    font-size: 1.1rem;
                    color: hsl(var(--text-muted));
                    font-style: italic;
                    margin-top: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default Contact;
