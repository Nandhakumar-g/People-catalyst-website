import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: null,
            children: [
                { name: 'About Us', path: '/about' },
                { name: 'Chief Catalyst', path: '/founder' },
                { name: 'Who We Work With', path: '/who-we-work-with' },
            ],
        },
        { name: 'Programs', path: '/programs' },
        { name: 'Approach', path: '/approach' },
        {
            name: 'Insights',
            path: null,
            hidden: true, // Temporarily hidden
            children: [
                { name: 'Blog / Insights', path: '/blog' },
                { name: 'Testimonials / Feedback', path: '/feedback' },
            ],
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar bg-surface shadow-sm">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img
                        src="/images/logo-colored.png"
                        alt="The People Catalyst"
                    />
                </Link>

                <div className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.filter(link => !link.hidden).map((link) => (
                        <div
                            key={link.name}
                            className={`nav-item ${link.children ? 'dropdown' : ''} ${activeDropdown === link.name ? 'open' : ''}`}
                            onClick={() => link.children && window.innerWidth <= 768 && toggleDropdown(link.name)}
                            onMouseEnter={() => window.innerWidth > 768 && setActiveDropdown(link.name)}
                            onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
                        >
                            {link.children ? (
                                <>
                                    <span className={`nav-link dropdown-toggle ${activeDropdown === link.name ? 'active' : ''}`}>
                                        {link.name} <ChevronDown size={14} className="dropdown-icon" style={{ marginLeft: '4px', display: 'inline' }} />
                                    </span>
                                    <div className="dropdown-menu">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                className={`dropdown-item ${location.pathname === child.path ? 'active' : ''}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
