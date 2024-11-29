import React from 'react';
import '../styles/content.css'; // Ensure to create a CSS file to style this component
 
import facebookImg from '../assets/kenya.jpg';

function Content() {
    return (
        <div className="Content-container" id="content">
            {/* Library Section */}
            <section className="Library-section">
                <h1 className="Section-title">Enjoy Our latest Content across our social media pages</h1>
                <div className="Library-content">
                    <div className="Project">
                        <iframe 
                          src="https://www.youtube.com/embed/J2oy8eF1fsY" 
                          title="YouTube video" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="Library-video"
                         ></iframe>
                       <h2>Latest Episodeo Nexus Pod</h2>
                    </div>

                    <div className="Project">
                            <img src={facebookImg} alt="Facebook"
                            className="Library-image"
                        />
                     <h2>Facebook Collage</h2>
                    </div>
                    <div className="Project">
                       <iframe 
                           src="https://www.tiktok.com/embed/7434798599235505463" 
                           title="TikTok Skit" 
                           frameBorder="0" 
                           allow="autoplay; encrypted-media" 
                           className="Library-tiktok"
                       ></iframe>
                       <h2>Latest TikTok</h2>
                    </div>
                </div>
            </section>

            {/* Bookings Section */}
            <section className="Booking-section">
                <h1 className="Section-title">Bookings</h1>
                <form className="Booking-form">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label htmlFor="service">Service Required:</label>
                    <select id="service" name="service" required>
                        <option value="photography">Photography</option>
                        <option value="videography">Videography</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="event-mc">Event MC</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Enter any additional details" rows="5"></textarea>

                    <button type="submit" className="Booking-button">Submit Booking</button>
                </form>
            </section>

            {/* Staff Section */}
               <section className="Staff-section">
                    <h1 className="Section-title">Meet the Zoeahtv Staff responsible for the amazing content</h1>
                    <div className="Staff-list">
                        <div className="Staff-member">
                        <h2>Jean De Dieau</h2>
                        <p>Role: Director and Founder</p>
                       </div>

                        <div className="Staff-member">
                        <h2>John Smith</h2>
                        <p>Role: Videographer</p>
                       </div>

                        <div className="Staff-member">
                        <h2>Emily Johnson</h2>
                        <p>Role: Photographer</p>
                       </div>

                        <div className="Staff-member">
                        <h2>Mike Brown</h2>
                        <p>Role: Editor</p>
                        </div>

                        <div className="Staff-member">
                        <h2>Sophia Davis</h2>
                        <p>Role: Social Media Manager</p>
                       </div>
                </div>
            </section>
        </div>
    );
}

export default Content;
