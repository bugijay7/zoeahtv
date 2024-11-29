import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/homepage.css'

import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Featured from '../components/Featured.jsx';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx';
import Testimonials from '../components/Testimonials.jsx';
function Homepage() {
    return (
        <div className='homepage-container' id='homepage'>
        <Navbar />
        <Hero />
        <About />
        <Featured />
        <Testimonials />
        <Footer />
        <nav className='backs'>
        <Link to="/">Back to Home</Link>
        </nav>
        </div>
    );
}

export default Homepage;