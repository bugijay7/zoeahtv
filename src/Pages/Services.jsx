import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Intro from '../components/Intro.jsx';
import Servicecards from '../components/Servicecards.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Testimonials from '../components/Testimonials.jsx';

function Services() {
    return (
        <motion.div
            className="services-container"
            id="services"
            initial={{ x: '-100vw', opacity: 0 }} // Start from off-screen
            animate={{ x: 0, opacity: 1 }}        // Slide into place
            transition={{ duration: 1.5, ease: "easeOut" }} // Animation timing
        >
            <Navbar />
            <Intro />
            <Servicecards />
            <Testimonials />
            <Footer />
            <nav className="backs">
                <Link to="/">Back to Home</Link>
            </nav>
        </motion.div>
    );
}

export default Services;
