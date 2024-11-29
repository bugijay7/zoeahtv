import React from 'react';
import '../styles/contactpage.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Contactform from '../components/Contactform';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Contactpage() {
    return (
        <div className='contactpage-container' id='contactpage'>
            <Navbar />
            <Contactform />
            <Content />
            <Footer />
            <nav className='backs'>
            <Link to="/">Back to Home</Link>
            </nav>
        </div>
    );
}

export default Contactpage;
