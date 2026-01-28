import React from 'react';
import { ArrowRight } from 'lucide-react';

const Founder = () => {
    return (
        <div className="page-container">
            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h1 className="hero-title text-primary">Chief Catalyst’s Note</h1>
                    <h2 className="section-subtitle">Building people with clarity, confidence, and behaviour-driven growth.</h2>
                </div>
            </section>

            <section className="section bg-alt reveal">
                <div className="container">
                    <div className="founder-note-content">

                        <p className="animate-item fade-up delay-100">
                            The People Catalyst was born from years of observing one recurring pattern—talent alone does not determine success; clarity, behaviour, and communication do.
                        </p>
                        <p className="animate-item fade-up delay-200">
                            Across students, professionals, and teams, I saw capable individuals struggle not because they lacked potential, but because they lacked direction, confidence, and the right behavioural foundation at the right time.
                        </p>
                        <p className="animate-item fade-up delay-300">
                            The intent behind The People Catalyst is simple: to make people development accessible, relevant, and human.
                        </p>
                        <p className="animate-item fade-up delay-400">
                            We believe learning should not feel distant or generic. It should feel contextual, practical, and supportive—like a partner who understands your environment and walks alongside you in your growth journey.
                        </p>
                        <p className="animate-item fade-up delay-500">
                            This is not about creating short-term outcomes. It is about building people who can navigate careers, workplaces, and life with clarity and confidence.
                        </p>

                        <div className="signature animate-item fade-right delay-600">
                            — Srinath Rangaraj, Founder
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h3 className="mb-8 animate-item fade-up" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Our Philosophy</h3>
                    <div className="philosophy-list">
                        <div className="philosophy-item animate-item scale-in hover-lift delay-100">People-first learning approach</div>
                        <div className="philosophy-item animate-item scale-in hover-lift delay-200">Contextual, experiential, outcome-driven</div>
                        <div className="philosophy-item animate-item scale-in hover-lift delay-300">Behavioural clarity and long-term growth</div>
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
                .hero-title {
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
                .founder-note-content {
                    max-width: 800px;
                    margin: 0 auto;
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: hsl(var(--text-main));
                }
                .founder-note-content p {
                    margin-bottom: 1.5rem;
                }
                .signature {
                    margin-top: 3rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: hsl(var(--primary));
                    font-style: italic;
                }
                .philosophy-list {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                }
                .philosophy-item {
                    background: hsl(var(--background));
                    padding: 1rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    box-shadow: var(--shadow-sm);
                }
            `}</style>
        </div>
    );
};

export default Founder;
