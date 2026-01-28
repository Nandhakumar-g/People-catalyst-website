import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                const rate = 0.1;
                // Simple parallax effect
                parallaxRef.current.style.transform = `translateY(${scrolled * rate}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page-container">
            {/* HERO */}
            <section className="section bg-surface text-center">
                <div className="container">
                    <h1 className="hero-title text-primary">About The People Catalyst</h1>
                    <h2 className="section-subtitle">Empowering people through clarity, behavioural skills, and professional readiness.</h2>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="section bg-alt reveal">
                <div className="container">
                    <div className="about-card hover-lift">
                        <h2 className="section-title mb-6">Who We Are</h2>
                        <div className="content-block">
                            <p className="mb-6 animate-item fade-up text-lg">
                                The People Catalyst is not just an upskilling company—it is a people development vision born from a simple observation: not all career failures are due to lack of talent; most stem from behavioural gaps and lack of clarity.
                            </p>
                            <p className="mb-6 animate-item fade-up delay-100">
                                We exist to address these invisible gaps early and meaningfully, working with individuals and cohorts across schools, colleges, and corporate teams. Our goal is to be a one-stop people development partner across the education-to-employment journey.
                            </p>
                            <p className="mb-6 animate-item fade-up delay-200">
                                We do not train technical skills. Our niche lies in what truly determines long-term success—behavioural skills, communication, clarity, and professional readiness. What are commonly called “soft skills” are, in reality, core life and career skills.
                            </p>
                        </div>

                        {/* Abstract Visual Replacement */}
                        <div className="about-visual-container mt-12 text-center overflow-hidden relative animate-item scale-in delay-300">
                            <div ref={parallaxRef} style={{ willChange: 'transform' }}>
                                <svg
                                    viewBox="0 0 600 300"
                                    className="w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ maxHeight: '350px' }}
                                >
                                    <defs>
                                        <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                                            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M 50 150 Q 150 50 300 150 T 550 150"
                                        fill="none"
                                        stroke="url(#aboutGrad1)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        className="animate-pulse-glow"
                                    />
                                    <circle cx="100" cy="180" r="60" fill="url(#aboutGrad1)" className="animate-float-intense" />
                                    <circle cx="500" cy="120" r="40" fill="hsl(var(--action))" fillOpacity="0.1" className="animate-float-intense" style={{ animationDelay: '1.5s' }} />
                                    <rect x="250" y="100" width="100" height="100" rx="20"
                                        fill="none" stroke="hsl(var(--text-muted))" strokeWidth="1" strokeOpacity="0.1"
                                        className="animate-float-intense"
                                        style={{ animationDelay: '0.5s' }}
                                        transform="rotate(15 300 150)" />
                                </svg>
                            </div>
                        </div>

                        {/* Optional Pull Quote */}
                        <div className="pull-quote text-center">
                            “Soft skills are not optional. They are foundational.”
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY WE EXIST */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="about-card hover-lift delay-100">
                        <h2 className="section-title mb-6">Why We Exist</h2>
                        <div className="content-block">
                            <p className="mb-4">
                                We may not be the first people development company you come across—but we aim to be the most approachable and effective one you work with.
                            </p>
                            <p className="mb-6">
                                We exist to help students, professionals, educators, and institutions navigate skill development, career readiness, and career progression without sounding distant or corporate.
                            </p>
                            <h3 className="emphasis-line text-center text-primary">
                                “Your Next-Door Training Partner”
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDER SNAPSHOT */}
            <section className="section bg-alt text-center reveal">
                <div className="container">
                    <div className="about-card hover-lift delay-200">
                        <h3 className="section-title mb-6" style={{ fontSize: '1.75rem' }}>Chief Catalyst’s Perspective</h3>
                        <p className="quote-text mb-6">
                            “The People Catalyst was born from a recurring observation—talent alone does not determine success; clarity, behaviour, and communication do.”
                        </p>
                        <Link to="/founder" className="btn btn-secondary">
                            Read the full Chief Catalyst’s Note
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section bg-surface text-center">
                <div className="container">
                    <h2 className="section-subtitle mb-8">Want to learn how we can support your growth journey?</h2>
                    <div className="button-group">
                        <a
                            href="https://wa.me/919940020511"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Let’s Talk
                        </a>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Page
                        </Link>
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
                .section-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: hsl(var(--text-main));
                }
                .content-block {
                    max-width: 800px;
                    margin: 0 auto;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: hsl(var(--text-muted));
                }
                .mb-4 { margin-bottom: 1rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                
                /* CARD SYSTEM */
                .about-card {
                    background: hsl(var(--surface));
                    border-radius: 1rem;
                    padding: 3rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease;
                    margin-bottom: 1rem;
                }
                .about-card:hover {
                    box-shadow: var(--shadow-md);
                    border-color: hsl(var(--primary) / 0.3);
                }
                
                .pull-quote {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: hsl(var(--primary));
                    margin-top: 2rem;
                    padding: 1.5rem;
                    border-top: 1px solid hsl(var(--border));
                    border-bottom: 1px solid hsl(var(--border));
                }
                .emphasis-line {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-top: 1rem;
                }
                .quote-text {
                    font-size: 1.25rem;
                    font-style: italic;
                    color: hsl(var(--text-main));
                    max-width: 700px;
                    margin: 0 auto 2rem;
                }
                .button-group {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }
                
                /* Global Animations Used: animate-float-intense, animate-pulse-glow */

                @media (max-width: 768px) {
                    .about-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
