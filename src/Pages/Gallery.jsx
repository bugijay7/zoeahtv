import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css'


import Navbar from '../components/Navbar';
import Image from '../components/Image'; 
import Footer from '../components/Footer'; 
import Content from '../components/Content';

function Gallery() {
    return (
        <div className='gallery-container' id='gallery'>
        <Navbar />
        <Image />
        <Content />
        <Footer />
        <nav className='backs' >
        <Link to="/">Back to Home</Link>
        </nav>
        </div>
    );
}

export default Gallery;