import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            title: "The Importance of Soft Skills",
            snippet: "Why behavioural skills are the real game-changer in today's career landscape.",
            link: "#"
        },
        {
            title: "Navigating Career Confusion",
            snippet: "How to find clarity when you feel stuck in your professional journey.",
            link: "#"
        },
        {
            title: "Building a Digital Identity",
            snippet: "Tips for students and professionals to stand out on LinkedIn.",
            link: "#"
        }
    ];

    return (
        <div className="page-container">
            <section className="section bg-surface text-center">
                <div className="container">
                    <h1 className="hero-title text-primary animate-on-load">Insights & Blog</h1>
                    <h2 className="section-subtitle animate-on-load delay-100">Thought leadership, stories, and updates on people development.</h2>
                </div>
            </section>

            <section className="section bg-alt">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="blog-card animate-on-load hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-snippet">{post.snippet}</p>
                                <a href={post.link} className="blog-link text-primary">
                                    Read More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-surface text-center">
                <div className="container">
                    <h2 className="section-subtitle mb-8 animate-on-load">Stay Updated with Our Insights</h2>
                    {/* Placeholder for future newsletter subscription or link */}
                    <div className="animate-on-load delay-100">
                        <button className="btn btn-secondary">Subscribe</button>
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
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .blog-card {
                    background: hsl(var(--surface));
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid hsl(var(--border));
                    transition: transform 0.2s;
                }
                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }
                .blog-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: hsl(var(--text-main));
                }
                .blog-snippet {
                    color: hsl(var(--text-muted));
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                .blog-link {
                    display: inline-flex;
                    align-items: center;
                    font-weight: 600;
                    text-decoration: none;
                }
                .blog-link:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Blog;
