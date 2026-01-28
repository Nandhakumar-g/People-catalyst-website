import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-surface section" style={{ borderTop: '1px solid hsl(var(--border))', padding: '2rem 0' }}>
            <div className="container text-center">
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="/images/logo-colored.png"
                        alt="The People Catalyst"
                        style={{ height: '60px', width: 'auto' }}
                    />
                </div>
                <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                    Where Potential Becomes Performance.
                </p>
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} The People Catalyst. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
