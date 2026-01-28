import React from 'react';

const Register = () => {
    return (
        <div className="register-page section">
            <div className="container">
                <div className="register-container">
                    <div className="text-center mb-8">
                        <h1 className="section-title">Register Now</h1>
                        <p className="section-subtitle">Join us and start your transformation journey.</p>
                    </div>

                    <form className="register-form shadow-lg">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="+91 98765 43210" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="course">Select Course</label>
                            <select id="course" className="form-input">
                                <option value="">Select a course...</option>
                                <option value="linkedin">LinkedIn Presence Lab</option>
                                <option value="career-catalyst">Career Catalyst</option>
                                <option value="roadmap">Career Roadmap Program</option>
                                <option value="confident">Confident Lab</option>
                                <option value="catalyst-core">Catalyst Core</option>
                                <option value="faculty">Faculty Development Program</option>
                            </select>
                        </div>

                        <button type="button" className="btn btn-primary btn-block">Submit Registration</button>
                    </form>
                </div>
            </div>

            <style>{`
        .register-container {
          max-width: 500px;
          margin: 0 auto;
        }
        .register-form {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: hsl(var(--text-main));
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .btn-block {
          width: 100%;
        }
      `}</style>
        </div>
    );
};

export default Register;
