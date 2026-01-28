import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Approach from './pages/Approach';
import WhoWeWorkWith from './pages/WhoWeWorkWith';
import Founder from './pages/Founder';
// import Blog from './pages/Blog';
// import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Register from './pages/Register';

const AnimationObserver = () => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const observeElements = () => {
            const elements = document.querySelectorAll('.reveal:not(.active)');
            elements.forEach(el => observer.observe(el));
        };

        // Observe immediately and at intervals to catch delayed renders
        observeElements();
        const t1 = setTimeout(observeElements, 100);
        const t2 = setTimeout(observeElements, 500);
        const t3 = setTimeout(observeElements, 1000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            observer.disconnect();
        };
    }, [location]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AnimationObserver />
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/approach" element={<Approach />} />
                        <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
                        <Route path="/founder" element={<Founder />} />
                        <Route path="/blog" element={<Navigate to="/" replace />} />
                        {/* <Route path="/feedback" element={<Feedback />} /> */}
                        <Route path="/feedback" element={<Navigate to="/" replace />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
