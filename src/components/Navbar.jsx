import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaImages, FaServicestack, FaEnvelope, FaQuestionCircle, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size to determine mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set the initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='Navbar-container' id='navbar'>
            <nav>
                {isMobile ? (
                    <>
                        <Link to="/"><FaHome title="Home" /></Link>
                        <Link to="/gallery"><FaImages title="Gallery" /></Link>
                        <Link to="/services"><FaServicestack title="Services" /></Link>
                        <Link to="/contactpage"><FaEnvelope title="Contact" /></Link>
                    </>
                ) : (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Gallery">Content</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contactpage">Contact</Link>
                    </>
                )}
            </nav>
            <div className='logo'>
                <h1><strong>Zoeah</strong>TV</h1>
            </div>
            <nav className="creative-shortcuts">
                <div className="shortcut-item">
                    <FaQuestionCircle className="shortcut-icon" />
                    <p>FAQs</p>
                </div>
                <div className="shortcut-item">
                    <FaCalendarAlt className="shortcut-icon" />
                    <p>Bookings</p>
                </div>

                <div className="shortcut-item">
                    <FaPhoneAlt className="shortcut-icon" />
                    <p>Contacts</p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
