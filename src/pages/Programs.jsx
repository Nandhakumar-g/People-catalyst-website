import React from 'react';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: "LinkedIn Presence Lab",
            description: "Building a credible digital identity and thought leadership presence on LinkedIn."
        },
        {
            title: "LinkedIn Bootcamp",
            description: "ATS-friendly resumes and hire-ready LinkedIn profiles for students."
        },
        {
            title: "Career Clarity & Readiness Programs",
            description: "Helping learners understand the job market and reverse-engineer career paths."
        },
        {
            title: "Career Catalyst",
            description: "1:1 mentoring for school and college students—from aspiration to career choice."
        },
        {
            title: "Confident Lab",
            description: "Building self-belief, communication, and personal presence in students."
        },
        {
            title: "Catalyst Core",
            description: "Developing mindset, discipline, and clarity to lead oneself before leading others."
        },
        {
            title: "Faculty Development Programs (FDPs)",
            description: "Supporting educators with communication, facilitation, and engagement skills."
        },
        {
            title: "Experiential Outbound Learning",
            description: "Activity-based learning focused on leadership, collaboration, and behaviour."
        }
    ];

    return (
        <div className="page-container">
            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h1 className="hero-title text-primary animate-item fade-up" style={{ opacity: 1, transform: 'none' }}>Our Programs</h1>
                    <h2 className="section-subtitle animate-item fade-up" style={{ opacity: 1, transform: 'none', transitionDelay: '100ms' }}>Practical, outcome-driven learning for students, professionals, educators, and organizations.</h2>
                    <p className="intro-copy animate-item fade-up" style={{ opacity: 1, transform: 'none', transitionDelay: '200ms' }}>
                        Our programs are designed to build clarity, confidence, and behaviour-driven skills. From early learners to professionals, we provide structured, experiential, and practical learning interventions across multiple contexts.
                    </p>
                </div>
            </section>

            <section className="section bg-alt reveal">
                <div className="container">
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="program-card animate-item scale-in hover-lift" style={{ transitionDelay: `${index * 100}ms` }}>
                                <h3 className="program-title text-primary">{program.title}</h3>
                                <p className="program-desc">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <div className="animate-item fade-up">
                        <a
                            href="https://wa.me/919940020511"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Let’s Chat <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>
                    <div style={{ marginTop: '1rem' }} className="animate-item fade-up delay-100">
                        <a href="/contact" className="secondary-link">Contact / Enquiry Page</a>
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
                    color: hsl(var(--text-main));
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                }
                .intro-copy {
                    max-width: 800px;
                    margin: 0 auto;
                    color: hsl(var(--text-muted));
                    font-size: 1.1rem;
                }
                .programs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 2rem;
                }
                .program-card {
                    background: hsl(var(--surface));
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .program-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }
                .program-title {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                .program-desc {
                    color: hsl(var(--text-muted));
                    line-height: 1.6;
                }
                .secondary-link {
                    color: hsl(var(--text-muted));
                    font-weight: 500;
                    text-decoration: underline;
                    font-size: 0.95rem;
                }
                .secondary-link:hover {
                    color: hsl(var(--primary));
                }
            `}</style>
        </div>
    );
};

export default Programs;
