import React from 'react';
import '../styles/hero.css';


import comedy from '../assets/prod7.jpg';
import interview from '../assets/nat1.jpg'
import podcast from '../assets/wed1.jpg'
import potraits from '../assets/prod1.jpg'

function Hero() {
    return (
        <div className='hero-container' id='hero'>
               <div className='hero-box'> 
                <div className='hero-title'>
                <h1>Your Vision, Our Lens</h1>
                <p>Capturing Stories, Crafting Impact</p>
                <a href='#services' className='cta-button'>Explore Our Services</a>
                </div>
            
            
                <div className="hero-gallery">
                <div className='photos'>
                <figure className="one">
                    <img src={comedy} alt="Comedy Skits" />
                    <figcaption>Comedy Skits</figcaption>
                </figure>
                <figure className="one">
                    <img src={interview} alt="Interviews" />
                    <figcaption>Interviews</figcaption>
                </figure>
                </div>
                <div className='photos'>
                <figure className="one">
                    <img src={podcast} alt="Podcasts" />
                    <figcaption>Podcasts</figcaption>
                </figure>
                <figure className="one">
                    <img src={potraits} alt="Potrait" />
                    <figcaption>Graphic Design</figcaption>
                </figure>
                </div>
                </div>
                </div>
            </div>
        
    );
}

export default Hero;
