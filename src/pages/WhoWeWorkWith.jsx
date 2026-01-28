import React from 'react';
import { ArrowRight, Users, GraduationCap, Briefcase, Building } from 'lucide-react';

const WhoWeWorkWith = () => {
    const segments = [
        {
            title: "Students",
            icon: <GraduationCap size={40} />,
            points: [
                "School students exploring interests and career possibilities",
                "College students preparing for careers and professional life",
                "Early-career professionals building clarity and confidence"
            ]
        },
        {
            title: "Educational Institutions",
            icon: <Building size={40} />,
            points: [
                "Schools focused on holistic student development",
                "Colleges and universities preparing learners for real-world careers",
                "Faculty teams seeking effective engagement and development"
            ]
        },
        {
            title: "Professionals & Founders",
            icon: <Users size={40} />,
            points: [
                "Working professionals strengthening communication and leadership",
                "Founders and leaders building credible digital presence and thought leadership"
            ]
        },
        {
            title: "Organizations & Teams",
            icon: <Briefcase size={40} />,
            points: [
                "Corporate teams investing in behavioural and people skills",
                "Organizations seeking experiential, impact-driven learning interventions"
            ]
        }
    ];

    return (
        <div className="page-container">
            <section className="section bg-surface text-center reveal">
                <div className="container">
                    <h1 className="hero-title text-primary">Who We Work With</h1>
                    <p className="section-subtitle">We partner with individuals and organizations committed to real, practical growth.</p>
                </div>
            </section>

            <section className="section bg-alt reveal">
                <div className="container">
                    <div className="segments-grid">
                        {segments.map((segment, index) => (
                            <div key={index} className="segment-card animate-item scale-in hover-lift" style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="segment-icon text-secondary">{segment.icon}</div>
                                <h3 className="segment-title">{segment.title}</h3>
                                <ul className="segment-list">
                                    {segment.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-surface text-center reveal">
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
                    color: hsl(var(--text-muted));
                    max-width: 600px;
                    margin: 0 auto;
                }
                .segments-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .segment-card {
                    background: hsl(var(--surface));
                    padding: 2.5rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    transition: transform 0.2s;
                    text-align: left;
                }
                .segment-card:hover {
                    transfrom: translateY(-5px);
                    border-color: hsl(var(--primary));
                }
                .segment-icon {
                    margin-bottom: 1.5rem;
                }
                .segment-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: hsl(var(--text-main));
                    border-bottom: 2px solid hsl(var(--primary));
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }
                .segment-list {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    color: hsl(var(--text-muted));
                    line-height: 1.7;
                }
                .segment-list li {
                    margin-bottom: 0.75rem;
                }
            `}</style>
        </div>
    );
};

export default WhoWeWorkWith;
