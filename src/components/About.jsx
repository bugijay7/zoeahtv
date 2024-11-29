import React from 'react';
import '../styles/about.css';
import mains from '../assets/mains.jpg';

function About() {
    return (
        <div  className="about-container" id="about">
                    <div className="about-hero">
                    <img src={mains} alt="About Zoeah Media" className="about-image" />
                    </div>

                        <div className='services-tile'>

                        <div className="services-list">
                        <p>🎭 Comedy Skits:</p>
                        <p>Crafting laughter with original humor.</p>
                        </div>
                        <div className="services-list">
                        <p>🎤 Interviews:</p>
                        <p>Engaging conversations with unique voices.</p>
                        </div>
                    
                        <div className="services-list">
                        <p>🎙️ Podcasts:</p>
                        <p>Thoughtful discussions on relevant topics.</p>
                        </div>
                        <div className="services-list">
                        <p>🎥 Video Shoots:</p>
                        <p>Professional videos for all your needs.</p>
                        </div>

                        <div className="services-list">
                        <p>📸 Photography:</p>
                        <p>Capturing moments that matter.</p>
                        </div>

                        <div className="services-list">
                        <p>🎨 Graphic Design:</p>
                        <p>Stunning visuals that tell your story.</p>
                       </div>
                       </div>


                       <p className="closing-note">
                       At Zoeah Media, we bring your stories to life. Our commitment to quality, creativity, and storytelling makes us the ideal partner for all your media needs.
                       </p>
                  </div>

                  
            
    
    );
}

export default About;
