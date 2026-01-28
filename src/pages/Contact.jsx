import React from 'react';
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react';

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
                    {/* Email and Call Options */}
                    <div className="contact-options-grid animate-item fade-up delay-100 mb-12">
                        <div className="contact-card hover-lift">
                            <div className="contact-icon-wrapper">
                                <Mail size={32} className="text-primary" />
                            </div>
                            <h3 className="contact-title">Email Us</h3>
                            <p className="contact-desc">
                                We’d love to hear from you. Drop a line any time with your thoughts or inquiries.
                            </p>
                            <a href="mailto:tpeoplecatalyst@gmail.com" className="contact-link">
                                tpeoplecatalyst@gmail.com
                            </a>
                        </div>

                        <div className="contact-card hover-lift delay-100">
                            <div className="contact-icon-wrapper">
                                <Phone size={32} className="text-primary" />
                            </div>
                            <h3 className="contact-title">Call Us</h3>
                            <p className="contact-desc">
                                Feel free to reach out directly. We’re here to listen and assist you.
                            </p>
                            <a href="tel:+919940020511" className="contact-link">
                                +91 99400 20511
                            </a>
                        </div>
                    </div>

                    {/* Primary CTA - WhatsApp */}
                    <div className="animate-item scale-in mb-8">
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

                    <p className="reinforcement-line mt-12 animate-item fade-up delay-200" style={{ maxWidth: '600px', margin: '3rem auto 0' }}>
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
                .contact-options-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .contact-card {
                    background: hsl(var(--surface));
                    padding: 2.5rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .contact-card:hover {
                    box-shadow: var(--shadow-md);
                    border-color: hsl(var(--primary) / 0.3);
                }
                .contact-icon-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }
                .contact-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: hsl(var(--text-main));
                }
                .contact-desc {
                    color: hsl(var(--text-muted));
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                .contact-link {
                    color: hsl(var(--primary));
                    font-weight: 600;
                    font-size: 1.1rem;
                    text-decoration: none;
                }
                .contact-link:hover {
                    text-decoration: underline;
                }
                .contact-icon-wrapper svg {
                    color: hsl(var(--primary));
                }
            `}</style>
        </div>
    );
};

export default Contact;
